import React, { useState, useEffect, Component, ReactNode } from 'react';

// Error types
export interface TraceITError extends Error {
  code: string;
  type: 'validation' | 'network' | 'server' | 'client';
  field?: string;
}

// Error logging utility
export const logError = (error: Error | TraceITError, context?: string) => {
  const errorData = {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    type: (error as TraceITError).type || 'unknown'
  };
  
  console.error('TraceIT Error:', errorData);
  
  // In production, send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // TODO: Integrate with error tracking service
  }
};

// Error message formatter
export const formatErrorMessage = (error: TraceITError | string, field?: string) => {
  if (typeof error === 'string') {
    return error;
  }

  const errorMessages: Record<string, string> = {
    required: `${field || 'Field'} is required`,
    email: 'Please enter a valid email address',
    minLength: `${field || 'Field'} must be at least 2 characters long`,
    maxLength: `${field || 'Field'} cannot exceed 100 characters`,
    pattern: `${field || 'Field'} contains invalid characters`,
    file: 'Please upload a valid file type',
    size: 'File size cannot exceed 5MB'
  };

  return errorMessages[error.code] || error.message || 'An error occurred. Please try again.';
};

// Error boundary component
export class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logError(error, 'Component error caught');
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold text-red-500 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">We encountered an error while loading this content.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading state hook
export const useLoadingState = (initialState = { isLoading: false, error: null as string | null }) => {
  const [state, setState] = useState(initialState);

  const setLoading = (isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading, error: null }));
  };

  const setError = (error: string) => {
    setState(prev => ({ ...prev, isLoading: false, error }));
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    ...state,
    setLoading,
    setError,
    reset
  };
};

// Async error handler
export const withAsyncErrorHandling = <T,>(
  asyncFn: () => Promise<T>,
  errorHandler?: (error: Error) => void
): Promise<T | null> => {
  return (async () => {
    try {
      return await asyncFn();
    } catch (error) {
      const err = error as Error;
      logError(err);
      errorHandler?.(err);
      return null;
    }
  })();
};

export default {
  logError,
  formatErrorMessage,
  ErrorBoundary,
  useLoadingState,
  withAsyncErrorHandling
};

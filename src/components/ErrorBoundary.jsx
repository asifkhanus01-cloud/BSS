import React from "react";
import { Button } from "@relume_io/relume-ui";

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * Follows React error boundary best practices
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null,
            errorInfo: null 
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to error reporting service
        console.error("Error caught by boundary:", error, errorInfo);
        this.setState({
            error,
            errorInfo
        });

        // In production, you would log this to an error reporting service
        // Example: logErrorToService(error, errorInfo);
    }

    handleReset = () => {
        this.setState({ 
            hasError: false, 
            error: null, 
            errorInfo: null 
        });
        // Optionally reload the page
        window.location.href = "/";
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-background-primary px-4">
                    <div className="max-w-2xl w-full text-center">
                        <div className="mb-8">
                            <h1 className="text-6xl font-bold text-school-blue mb-4">
                                Oops!
                            </h1>
                            <h2 className="text-3xl font-semibold text-text-primary mb-4">
                                Something went wrong
                            </h2>
                            <p className="text-text-secondary mb-8">
                                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
                            </p>
                        </div>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                                <h3 className="font-semibold text-red-800 mb-2">Error Details (Development Only):</h3>
                                <pre className="text-xs text-red-700 overflow-auto">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                title="Go to Homepage"
                                onClick={this.handleReset}
                                variant="primary"
                            >
                                Go to Homepage
                            </Button>
                            <Button
                                title="Reload Page"
                                onClick={() => window.location.reload()}
                                variant="secondary"
                            >
                                Reload Page
                            </Button>
                        </div>

                        <div className="mt-8 text-sm text-text-secondary">
                            <p>If the problem persists, please contact us at:</p>
                            <a 
                                href={`mailto:${this.props.contactEmail || 'info@benchmark.edu.pk'}`}
                                className="text-school-blue hover:underline"
                            >
                                info@benchmark.edu.pk
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;


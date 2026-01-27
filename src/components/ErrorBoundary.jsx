import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    backgroundColor: '#050810',
                    color: '#ff6b6b',
                    padding: '40px',
                    fontFamily: 'monospace'
                }}>
                    <h1 style={{ color: '#00ff9d', marginBottom: '20px' }}>
                        ⚠️ ERROR DE RENDERIZADO
                    </h1>
                    <div style={{
                        backgroundColor: '#1c1c1c',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #ff6b6b',
                        marginBottom: '20px',
                        overflowX: 'auto'
                    }}>
                        <h2 style={{ color: '#ff6b6b' }}>Error:</h2>
                        <pre style={{ whiteSpace: 'pre-wrap', color: '#fff' }}>
                            {this.state.error && this.state.error.toString()}
                        </pre>
                    </div>
                    <div style={{
                        backgroundColor: '#1c1c1c',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #666',
                        overflowX: 'auto'
                    }}>
                        <h2 style={{ color: '#00d4ff' }}>Stack Trace:</h2>
                        <pre style={{ whiteSpace: 'pre-wrap', color: '#94a3b8', fontSize: '12px' }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '20px',
                            padding: '12px 24px',
                            backgroundColor: '#00ff9d',
                            color: '#000',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        RECARGAR PÁGINA
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

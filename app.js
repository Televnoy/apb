const { useState, useEffect, useRef } = React;

// --- Компонент иконок ---
const Icon = ({ name, size = 24, className = '', ...props }) => (
    <svg width={size} height={size} className={`lucide lucide-${name} ${className}`} {...props}>
        <use href={`#${name}`} />
    </svg>
);

const Trash2 = (p) => <Icon name="trash-2" {...p} />;
const X = (p) => <Icon name="x" {...p} />;
const Plus = (p) => <Icon name="plus" {...p} />;
const Camera = (p) => <Icon name="camera" {...p} />;
const RotateCw = (p) => <Icon name="rotate-cw" {...p} />;
const Paperclip = (p) => <Icon name="paperclip" {...p} />;
const ChevronDown = (p) => <Icon name="chevron-down" {...p} />;
const Send = (p) => <Icon name="send" {...p} />;
const Lock = (p) => <Icon name="lock" {...p} />;
const User = (p) => <Icon name="user" {...p} />;
const MapPin = (p) => <Icon name="map-pin" {...p} />;
const CheckCircle2 = (p) => <Icon name="check-circle-2" {...p} />;
const AlertCircle = (p) => <Icon name="alert-circle" {...p} />;

const App = () => {
    // Весь остальной код функции App из твоего файла...
    // (useEffect для прелоадера, стейты, функции handleLogin и т.д.)
    
    useEffect(() => {
        const loader = document.getElementById('preloader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }, 2500);
        }
    }, []);

    // ... (вставь сюда всё тело функции App) ...
    
    return (
        <div className="min-h-screen bg-[#F9F9F9] text-[#2C2C2C] pb-48 relative">
            {/* JSX разметка из твоего файла */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

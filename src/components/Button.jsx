function Button({label, action}){
    return(
        <button onClick={action}
            className="border-2 border-green-900 p-4, rounded-xl bg-green-600 text-green-50">
            {label}
        </button>
    );
}

export default Button;
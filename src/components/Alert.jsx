import React from 'react';

const Alert = ({ message, type }) => {
    const alertmsg = type === 'success' ? 'alert alert-success' : 'alert alert-danger';

return (
    <div className={alertmsg} role="alert">
        {message}
    </div>
    );
};

export default Alert;

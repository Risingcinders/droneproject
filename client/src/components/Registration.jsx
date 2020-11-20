const Registration = (props) => {
    const { form, errors, handleChange, submitValue, handleSubmit } = props;

    return (
        <form className="logreg" onSubmit={handleSubmit}>
            <p>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {errors.firstName ? (
                    <span> {errors.firstName.message} </span>
                ) : null}
            </p>
            <p>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {errors.lastName ? (
                    <span> {errors.lastName.message} </span>
                ) : null}
            </p>
            <p>
                <label>
                    Username:
                    <input
                        type="text"
                        name="userName"
                        value={form.userName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {errors.userName ? (
                    <span> {errors.userName.message} </span>
                ) : null}
                {errors.unique ? <span> {"That Username is already in use."} </span> : null}
            </p>
            <p>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {errors.email ? <span> {errors.email.message} </span> : null}
                {errors.unique ? <span> {"That email is already in use."} </span> : null}
            </p>
            <p>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {errors.password ? <span> {errors.password.message} </span> : null}
            </p>
            <p>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {errors.confirmPassword ? <span> {errors.confirmPassword.message} </span> : null}
            </p>
            
            <input className="subbtn" type="submit" value={submitValue} />
        </form>
    );
};

export default Registration;

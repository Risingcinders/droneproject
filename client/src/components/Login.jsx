
const Login = (props) => {
    const { form, errors, handleChange, submitValue, handleSubmit } = props;

    return (
        <form className="logreg" onSubmit={handleSubmit}>
                <p>
                    <label>Username: 
                    <input
                        type="text"
                        name="userName"
                        value={form.userName}
                        onChange={handleChange}
                    /></label>
                    <br/>
                </p>
                <p>
                    <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    /></label>
                    <br />
                    {errors.login ? <span> {errors.login} </span> : null}
                </p>
                <input className="subbtn" type="submit" value={submitValue} />
        </form>
    );
};

export default Login;


const DeviceForm = (props) => {
    const { form, errors, handleChange, submitValue, handleSubmit } = props;

    return (
        <form className="deviceform" onSubmit={handleSubmit}>
            <div>
                <p>
                    <label>Name: 
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    /></label>
                    <br/>
                    {errors.name ?<span> {errors.name.message} </span> : null}
                    {errors.unique ? <span> {errors.unique.message} </span> : null}
                </p>
                <p>
                    <label>Address:
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                    /></label>
                    <br />
                    {errors.address ? <span> {errors.address.message} </span> : null}
                </p>
                <p>
                    <label>Key:
                    <input
                        type="text"
                        name="key"
                        value={form.key}
                        onChange={handleChange}
                    /></label>
                    <br />
                    {errors.key ? <span> {errors.key.message} </span> : null}
                </p>
                <p>
                    <label>Description:
                    <textarea
                        className="descinput"
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows="2"
                    ></textarea></label>
                    <br />
                    <span>
                        {errors.description ? errors.description.message : null}
                    </span>
                </p>
                <input className="subbtn" type="submit" value={submitValue} />
            </div>            
        </form>
    );
};

export default DeviceForm;

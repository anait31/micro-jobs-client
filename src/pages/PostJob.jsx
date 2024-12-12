
const PostJob = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-lg w-full max-w-xs" />
                <div>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default PostJob;
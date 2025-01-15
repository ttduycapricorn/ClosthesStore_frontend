'use client';

function ContactPage() {
    return (
        <div>
            <h1>contact page</h1>
            <div className="flex flex-col border-spacing-2">
                <div className="flex flex-col border-spacing-2">
                    <label htmlFor="username">Your email</label>
                    <input className="" type="text" id="username" />
                </div>
                <button
                    className="rounded-sm border-collapse"
                    onClick={() => {
                        console.log('submit');
                    }}
                >
                    submit
                </button>
            </div>
        </div>
    );
}

export default ContactPage;

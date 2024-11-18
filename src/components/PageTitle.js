function PageTitle({ h1, h2 }) {
    return (
        <div className="container-fluid page-title">
            <div className="container">
                <div className="page-title-text">
                    <h1>{h1}</h1>
                    <h2>{h2}</h2>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;
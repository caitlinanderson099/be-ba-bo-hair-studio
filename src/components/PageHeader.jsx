
const PageHeader = ({ title, image_url }) => {
    return (
      <div className='page-header' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image_url})`}}>
        <h1> {title} </h1>
      </div>
    );
  };

export default PageHeader;

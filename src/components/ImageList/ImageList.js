import React from "react";
import moment from "moment";

export const ImageList = ({ images }) => {
  return (
    <div>
      <>
        {images.length > 0 && <h1>Results of the search</h1>}
        <div className="ui grid">
          {images.map((image) => {
            return (
              <div key={image.id} className="four wide column">
                {/* <img src={image.urls.thumb} alt={image.alt_description} /> */}
                <div className="ui card" style={{height: "100%"}}>
                  <div className="image" style={{ height: "300px"}}>
                    <img src={image.urls.regular} alt={image.alt_description} style={{height: "100%", objectFit: "cover"}}/>
                  </div>
                  <div className="content">
                    <a className="header">{image.user.name}</a>
                    <div className="meta">
                      <span className="date">
                       Uploaded: {moment(image.created_at).fromNow()}
                      </span>
                    </div>
                    <div className="description">{image.description}</div>
                    <div className="extra content">
                        <span>
                            <i className="like icon"></i>{image.likes}
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

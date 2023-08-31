import React, { FunctionComponent } from 'react';

type Ciara = {image: string, name: string, position: string, info: string,  link1: string, link2: string, link3: string, link4: string}
type Alwin = {image: string, name: string, position: string, info: string,  link1: string, link2: string,link3: string, link4: string}
type Gabriel = {image: string, name: string, position: string, info: string,  link1: string, link2: string, link3: string, link4: string}
type Thomas = {image: string, name: string, position: string, info: string,  link1: string, link2: string, link3: string, link4: string}

export const Ciara: FunctionComponent<Ciara> = ({image, name, position, info,  link1, link2, link3, link4}: Ciara) => {
    return(
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
                <div className="team-image-wrapper">
                    <img className="team-member-image" src={image} />
                </div>
                <p className="text-blk name">
                    {name}
                </p>
                <p className="text-blk position">
                    {position}
                </p>
                <p className="text-blk feature-text">
                    {info}
                </p>
                <div className="social-icons">
                    <a href={link1} target="_blank">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href={link2} target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={link3} target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href={link4} target="_blank">
                        <i className="bi bi-filetype-pdf"></i>
                    </a>
                </div>
            </div>
      </div>
    );
}

export const Alwin: FunctionComponent<Alwin> = ({image, name, position, info,  link1, link2, link3, link4}: Alwin) => {
    return(
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
                <div className="team-image-wrapper">
                    <img className="team-member-image" src={image} />
                </div>
                <p className="text-blk name">
                    {name}
                </p>
                <p className="text-blk position">
                    {position}
                </p>
                <p className="text-blk feature-text">
                    {info}
                </p>
                <div className="social-icons">
                    <a href={link1} target="_blank">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href={link2} target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={link3} target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href={link4} target="_blank">
                        <i className="bi bi-filetype-pdf"></i>
                    </a>
                </div>
            </div>
      </div>
    );
}

export const Gabriel: FunctionComponent<Gabriel> = ({image, name, position, info,  link1, link2, link3, link4}: Gabriel) => {
    return(
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
                <div className="team-image-wrapper">
                    <img className="team-member-image" src={image} />
                </div>
                <p className="text-blk name">
                    {name}
                </p>
                <p className="text-blk position">
                    {position}
                </p>
                <p className="text-blk feature-text">
                    {info}
                </p>
                <div className="social-icons">
                    <a href={link1} target="_blank">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href={link2} target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={link3} target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href={link4} target="_blank">
                        <i className="bi bi-filetype-pdf"></i>
                    </a>
                </div>
            </div>
      </div>
    );
}

export const Thomas: FunctionComponent<Thomas> = ({image, name, position, info,  link1, link2, link3, link4}: Thomas) => {
    return(
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
                <div className="team-image-wrapper">
                    <img className="team-member-image" src={image} />
                </div>
                <p className="text-blk name">
                    {name}
                </p>
                <p className="text-blk position">
                    {position}
                </p>
                <p className="text-blk feature-text">
                    {info}
                </p>
                <div className="social-icons">
                    <a href={link1} target="_blank">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href={link2} target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={link3} target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href={link4} target="_blank">
                        <i className="bi bi-filetype-pdf"></i>
                    </a>
                </div>
            </div>
      </div>
    );
}
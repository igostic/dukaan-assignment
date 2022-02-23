import React from "react";

const OverlayBody = () => {
  return (
    <div className="box-layout-panel">
      <div id="box-layout-content" className="container box-layout-content">
        <section className="box-layout-section tool-left-txt">
          <h1 className="section-header">Free Slogan Generator</h1>
          <p className="section-info">
            Simply enter a term that describes your business or service, and
            generate catchy slogans.
          </p>
          <form
            autoComplete="off"
            className="box-layout-form slogan-form"
            _lpchecked="1"
          >
            <div className="row">
              <div className="col-md-6 col-xs-12 cross-ico-main">
                <div className="form-group input-wrap form-group-lg">
                  <label className="field-label required">
                    Enter a word. Generate slogan. Magic!
                  </label>
                  <input
                    type="text"
                    name="query"
                    defaultValue="cozy"
                    placeholder="Enter a word"
                    maxLength="100"
                    autoComplete="off"
                  />
                </div>
                <span className="cross-icon-on-type"></span>
              </div>
            </div>
            <div className="pt16">
              <button
                type="submit"
                className="btn-0 btn-primary"
                id="slogan-form"
              >
                Generate slogans
              </button>
            </div>
          </form>
          <div className="slogans-list-wrap">
            <div className="section-divider"></div>
            <div className="d-flex-c-l ">
              <h4>We have generated 1,023 slogans for “cozy”</h4>
              <button className="btn-blue">Download All</button>
            </div>

            <div className="row">
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-0"
                    readOnly=""
                    defaultValue="Welcome to a Cozy Place"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-1"
                    readOnly=""
                    defaultValue="Get Cozy with Us"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-2"
                    readOnly=""
                    defaultValue="Stay Cozy with Us"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-3"
                    readOnly=""
                    defaultValue="We're Your Cozy Place"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-4"
                    readOnly=""
                    defaultValue="Stay Cozy"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-5"
                    readOnly=""
                    defaultValue="Cozy at Home"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-6"
                    readOnly=""
                    defaultValue="Cozy Memories"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-7"
                    readOnly=""
                    defaultValue="Cozy Feelings"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-8"
                    readOnly=""
                    defaultValue="You'll be Cozy Here"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-9"
                    readOnly=""
                    defaultValue="Cozy and Friendly"
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-10"
                    readOnly=""
                    defaultValue="Every cozy moment is worth remembering."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-11"
                    readOnly=""
                    defaultValue="Celebrate your favorite cozy moments."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-12"
                    readOnly=""
                    defaultValue="Keep the memories of your cozy moments alive."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-13"
                    readOnly=""
                    defaultValue="The cozy moments that matter most."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-14"
                    readOnly=""
                    defaultValue="Every cozy moment is special."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-15"
                    readOnly=""
                    defaultValue="Every cozy moment is a gift."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-16"
                    readOnly=""
                    defaultValue="Cozy moments are worth celebrating."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-17"
                    readOnly=""
                    defaultValue="Embrace your cozy moments."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-18"
                    readOnly=""
                    defaultValue="Cozy moments are the best."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-19"
                    readOnly=""
                    defaultValue="The most memorable moments are cozy ones."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-20"
                    readOnly=""
                    defaultValue="There's nothing better than a cozy sweater."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-21"
                    readOnly=""
                    defaultValue="I don't know how you sleep in a bed."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-22"
                    readOnly=""
                    defaultValue="I like cozy cars because they're always so comfortable."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-23"
                    readOnly=""
                    defaultValue="You should get some cozy pants."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-24"
                    readOnly=""
                    defaultValue="Cozy is what I like."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-25"
                    readOnly=""
                    defaultValue="You need to have a cozy time with this person."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-26"
                    readOnly=""
                    defaultValue="I'm going to make you a cozy coffee for you."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-27"
                    readOnly=""
                    defaultValue="I'm going to cozy up to you and give you a hug."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-28"
                    readOnly=""
                    defaultValue="We should have a cozy time."
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 slogan-item">
                <div className="form-group">
                  <input
                    className="cur-p copy-clip-input"
                    type="button"
                    id="slogan-29"
                    readOnly=""
                    defaultValue="I'm not too sure about this cozy thing, but it's not bad."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverlayBody;

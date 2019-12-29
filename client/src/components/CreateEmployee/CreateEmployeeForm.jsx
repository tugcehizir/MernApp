import React, { Component } from "react";

class CreateEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <form>
        <h3>Müşteri Kaydet</h3>

        <div className="form-group">
          <label>Adı Soyadı</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adı Soyadı"
          />
        </div>

        <div className="form-group">
          <label>Eposta Adresi</label>
          <input type="email" className="form-control" placeholder="email" />
        </div>

        <div className="form-group">
          <label>Yaş</label>
          <input
            type="number"
            className="form-control"
            placeholder="Yaş giriniz"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Müşteriyi Kaydet
        </button>
      </form>
    );
  }
}

export default CreateEmployeeForm;

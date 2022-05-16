


function App() {
  return (
    <div className="App">
      <div className="container">
      
      <div className="form formControl">
        <div className="name col-md-36">
          <div className="lable col-md-2">نام کاربر</div>
          <div className="boxname col-md-10"></div>
        </div>
        <div className="birthdate col-md-36">
          <div className="lable col-md-2">تاریخ تولد</div>
          <div className="boxbirthdate col-md-10"></div>
        </div>
        <div className="email col-md-36">
          <div className="lable col-md-2">ایمیل</div>
          <div className="boxemail col-md-10"></div>
        </div>
        <div className="role col-md-36">
          <div className="lable col-md-2">نقش</div>
          <div className="boxrole col-md-10"></div>
        </div>
        
      </div>
      <table className="table">
          <thead>
            <tr>
              <th className="name col-md-2">نام کاربر</th>
              <th className="birthdate col-md-2">تاریخ تولد</th>
              <th className="email col-md-2">ایمیل</th>
              <th className="role col-md-2">نقش</th>
              <th className="editcol col-md-2">ویرایش</th>
              <th className="deletecol col-md-2">حذف</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <th className="name col-md-2"> فرزانه حسینی</th>
                <th className="birthdate col-md-2">1369/04/09</th>
                <th className="email col-md-2">f_hosseini54@yahoo.com</th>
                <th className="role col-md-2">admin</th>
                <th className="editcol col-md-2">
                  <a className="iconedite">
                    <i className="fa fa-edite"></i>
                  </a>
                </th>
                <th className="deletecol col-md-2"></th>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;

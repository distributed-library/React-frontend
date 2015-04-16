var Panel = require('react-bootstrap').Panel;
var ButtonList = React.createClass({
  render: function(){
    var divStyle = {
      marginTop: "10px"
    };
    var html = (
      <div style={divStyle} className='form-group'>
        <div className="col-sm-12 controls">
          <a id="btn-login" href="#" className="btn btn-success"> Login </a>
        </div>
      </div>
    );
    
    return html; 
  }
});

var SignupLink = React.createClass({
  render: function(){
    var divStyle = {
      borderTop: '1px solid#888',
      paddingTop: '15px',
      fontSize: '85%'
      
    }
    var html = (
      <div className='form-group'>
        <div className="col-md-12 control">
          <div style={divStyle} >
            Don't have an account! 
            <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
              Sign Up Here  
            </a>
          </div>
        </div>
      </div> 
     );
     return html;
  } 
});

var InputField = React.createClass({
  render: function(){
    var inputGroupStyle = {
      marginBottom: '25px'
    } 
    var html =  (
      <fieldset>
        <div style={inputGroupStyle} className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
          <input id="login-username" type="text" className="form-control" name="username" value="" placeholder="username or email" /> 
        </div>
        <div style={inputGroupStyle} className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
          <input id="login-password" type="password" className="form-control" name="password" placeholder="password" />
        </div>
        <div className="input-group">
          <div className="checkbox">
            <label>
              <input id="login-remember" type="checkbox" name="remember" value="1" /> Remember me
            </label>
          </div>
        </div>  
      </fieldset>
    );

    return html;
  }
})


const panelHeading = (
  <h3>Sign In </h3>
)

var FormPanel = React.createClass({
  render: function(){
    var html = (
    <Panel header={panelHeading} bsStyle='info'>
      <form id="loginform" class="form-horizontal" role="form">
        <InputField />
        <ButtonList />
        <SignupLink />       
      </form> 
    </Panel>   
    );

    return html;
  }
});

module.exports = FormPanel;

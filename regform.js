import React from "react";
function RegForm(){
    return(

    <fieldset>
    <h1 class="ma">Registration Form</h1>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
    </div>
    <br></br>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Last Name</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
    </div>
    <br></br>
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control-plaintext" id="staticEmail"></input>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword"></input>
        </div>
      </div>
      <br></br>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Contact</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
    </div>
    <div>
      <p class="space">Gender</p>
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
      <label class="form-check-label" for="inlineRadio1">Male</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
      <label class="form-check-label" for="inlineRadio2">Female</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled></input>
      <label class="form-check-label" for="inlineRadio3">other</label>
    </div>
      <br></br>
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Course</option>
        <option value="1">CSE</option>
        <option value="2">ECE</option>
        <option value="3">EEE</option>
        <option value="3">AIDS</option>
      </select>
      <br></br>
      <br></br>
      <div class="mb-3">
        <label for="formFile" class="form-label">upload your resume:</label>
        <input class="form-control" type="file" id="formFile"></input>
      </div>
      <br></br>
      <button>SUBMIT</button>    
    </fieldset>
    
    );
}
export default RegForm;
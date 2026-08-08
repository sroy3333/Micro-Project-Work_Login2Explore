/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var stuDBName = "SCHOOL-DB";
var stuRelationName = "STUDENT-TABLE";
var connToken = "90933456|-31949245445406537|90904196";

$("#sturoll").focus();

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function getStuRollAsJsonObj() {
    var sturoll = $("#sturoll").val();
    var jsonStr = {
        roll: sturoll
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#stuname").val(record.name);
    $("#stucls").val(record.class);
    $("#stubdt").val(record.dob);
    $("#stuadrs").val(record.address);
    $("#enroldt").val(record.enrolldate);
}

function resetForm() {
    $("#sturoll").val("");
    $("#stuname").val("");
    $("#stucls").val("");
    $("#stubdt").val("");
    $("#stuadrs").val("");
    $("#enroldt").val("");
    $("#sturoll").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#sturoll").focus();
}


function validateData() {
    var sturoll, stuname, stucls, stubdt, stuadrs, enroldt;
    sturoll = $("#sturoll").val();
    stuname = $("#stuname").val();
    stucls = $("#stucls").val();
    stubdt = $("#stubdt").val();
    stuadrs = $("#stuadrs").val();
    enroldt = $("#enroldt").val();

    if (sturoll === "") {
        alert("Roll No missing");
        $("#sturoll").focus();
        return "";
    }
    if (stuname === "") {
        alert("Student Name missing");
        $("#stuname").focus();
        return "";
    }
    if (stucls === "") {
        alert("Student Class missing");
        $("#stucls").focus();
        return "";
    }
    if (stubdt === "") {
        alert("Student DOB missing");
        $("#stubdt").focus();
        return "";
    }

    if (stuadrs === "") {
        alert("Student Adderss missing");
        $("#stuadrs").focus();
        return "";
    }
    if (enroldt === "") {
        alert("Enrollment Date missing");
        $("#enroldt").focus();
        return "";
    }

    var jsonStrObj = {
        roll: sturoll,
        name: stuname,
        class: stucls,
        dob: stubdt,
        address: stuadrs,
        enrolldate: enroldt
    };
    return JSON.stringify(jsonStrObj);
}

function getStu() {
    var sturollJsonObj = getStuRollAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, stuDBName, stuRelationName, sturollJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 400) {
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#stuname").focus();
    } else if (resJsonObj.status === 200) {
        $("#sturoll").prop("disabled", true);
        fillData(resJsonObj);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#stuname").focus();
    }
}

function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") {
        return "";
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, stuDBName, stuRelationName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("#sturoll").focus();
}

function changeData() {
    $("#change").prop("disabled", true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, stuDBName, stuRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $("#sturoll").focus();
}

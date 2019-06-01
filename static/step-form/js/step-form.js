
jQuery.extend(jQuery.validator.messages,{
  required: "필수 입력 정보입니다.",
  email: "이메일 형식이 아닙니다.",
  equalTo: "비밀번호가 일치하지 않습니다.",
  student_number: "학번 형식이 아닙니다."
})
$.validator.addMethod("student_id_form", function (value, element) {
    return this.optional(element) || /^[A-Z]\d{6}/.test(value);
}, "학번 형식이 아닙니다.");

$.validator.addMethod("phone_number_form", function (value, element) {
    return this.optional(element) || /^010\d{8}/.test(value);
}, "핸드폰 번호 형식이 아닙니다.");


var form = $("#entry-form").show();

form.steps({
  headerTag: "h2",
  bodyTag: "fieldset",
  transitionEffect: "slideLeft",
  onStepChanging: function (event, currentIndex, newIndex) {
    form.validate().settings.ignore = ":disabled,:hidden";
    return form.valid();
  },
  onFinishing: function (event, currentIndex) {
    form.validate().settings.ignore = ":disabled";
    return form.valid();
  },
  onFinished: function (event, currentIndex) {
    form.submit();
    alert("제출되었습니다!");
  }
  

}).validate({
  errorPlacement: function errorPlacement(error, element) {
    element.before(error);
  },
  rules: {
    password2: {
      equalTo: "#password1"
    },
    student_id: {
      student_id_form: "#student_id"
    },
    phone_number: {
      phone_number_form: "#phone_number"
    }
     
  }
});




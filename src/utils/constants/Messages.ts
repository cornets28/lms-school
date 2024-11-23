export const MESSAGE = {
    WHITE_SPACE : 'Content has whitespace',
    EMAIL_INVALID : 'Please enter a valid email address',
    INPUT_REQUIRED : 'This field is required',
    AGREE_REQUIRED : 'The terms and conditions must be accepted.',
    SYSTEM_ERROR : 'Something went wrong'
  }
  
  export function MinMaxMessage(type:string, inputName:string, lengthCharacter:number){
    return type === 'min' ?
      inputName + ' must be at least ' + lengthCharacter + ' characters' :
      inputName + ' must be less than ' + lengthCharacter + ' characters'
  }
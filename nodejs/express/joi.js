const Joi = require('joi');
const arrayString = ['banana','bacon','cheese']
const arrayObjects = [{example:'example1'},{example:'example2'},{example:'example3'}]

const userInput = {
    personalInfo : {
        streetAddress : '1234567',
        city:'kljfbfj',
        state:'f1'
    },
    preferences : arrayObjects
}

//Schema for personalInfo
const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state:Joi.string().trim().length(2).required()
})
//Schema for prefernces
//an array schema and we will use items - which will take only array of object with keys
const preferencesSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().required()
}))

//combining schema
const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
})
const result = schema.validate(userInput)
console.log(result)
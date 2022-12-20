import Joi from "joi";

export let getProductList = Joi.object()
  .keys({
    sort: Joi.string()
      .optional(),
    order: Joi.string()
      .optional(),
    search: Joi.string()
      .optional()
      .min(1)
  });

export let checkout = Joi.object()
  .keys({
    customerName: Joi.string()
      .required()
      .min(1),
    order: Joi.array().items({
      id: Joi.number()
        .required(),
      quantity: Joi.number()
        .required(),
    })
  });



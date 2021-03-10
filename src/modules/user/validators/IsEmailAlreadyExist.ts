import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from "class-validator";
import prisma from "../../../utils/prisma"

@ValidatorConstraint({async: true})
export class IsEmailAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    validate(email: string) {
        return prisma.user.findFirst({
            where: {email},
        }).then(user => !user);
    }
}


export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailAlreadyExistConstraint,
        });
    };
}

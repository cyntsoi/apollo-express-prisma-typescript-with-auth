import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from "class-validator";
import prisma from "../../../utils/prisma"

@ValidatorConstraint({ async: true })
export class IsUserAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    validate(username: string) {
        return prisma.user.findFirst({
            where: { username },
        }).then((user) => {
            if (user) return false;
            return true;
        });
    }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUserAlreadyExistConstraint,
        });
    };
}

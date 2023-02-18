import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, Length, Validate } from 'class-validator';

import { RoleEnum } from '@src/enums/role.enum';
import { PasswordConfirmValidator } from '@validators/password-confirm.validator';

export class AdminUpdateUserDto {
    @IsOptional()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsOptional()
    @IsNotEmpty()
    @Length(8, 24)
    password: string;

    @IsOptional()
    @IsNotEmpty()
    @Validate(PasswordConfirmValidator, ['password'])
    password_confirmation: string;

    @IsOptional()
    @IsEnum(RoleEnum)
    role: RoleEnum;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;
}

/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ColorPickerPropsInterface } from "@wso2is/react-components";
import { CheckboxProps, InputProps } from "semantic-ui-react";
import { CheckboxField, RadioField } from "./form";

/**
 * Radio Adapter props interface.
 */
export interface RadioAdapterPropsInterface extends CheckboxProps {

    /**
     * Props for the child.
     */
    childFieldProps: RadioField;
}

/**
 * Checkbox adapter props interface.
 */
export interface CheckboxAdapterPropsInterface extends CheckboxProps {

    /**
     * Props for the child.
     */
    childFieldProps: CheckboxField;
}

/**
 * Color Picker Adapter props interface.
 */
export interface ColorPickerAdapterPropsInterface extends ColorPickerPropsInterface, Omit<InputProps, "onChange"> {

    /**
     * Props for the child.
     */
    childFieldProps: CheckboxField;
}

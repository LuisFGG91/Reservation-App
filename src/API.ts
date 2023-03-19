/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReservationInput = {
  id?: string | null,
  date?: string | null,
  menu?: string | null,
  stylistId?: number | null,
  customerId?: string | null,
};

export type ModelReservationConditionInput = {
  date?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  stylistId?: ModelIntInput | null,
  customerId?: ModelStringInput | null,
  and?: Array< ModelReservationConditionInput | null > | null,
  or?: Array< ModelReservationConditionInput | null > | null,
  not?: ModelReservationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type reservation = {
  __typename: "reservation",
  id: string,
  date?: string | null,
  menu?: string | null,
  stylistId?: number | null,
  customerId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReservationInput = {
  id: string,
  date?: string | null,
  menu?: string | null,
  stylistId?: number | null,
  customerId?: string | null,
};

export type DeleteReservationInput = {
  id: string,
};

export type CreateMenuInput = {
  id?: string | null,
  menu?: string | null,
  amountOfMoney?: number | null,
  treatmentTime?: number | null,
};

export type ModelMenuConditionInput = {
  menu?: ModelStringInput | null,
  amountOfMoney?: ModelIntInput | null,
  treatmentTime?: ModelIntInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type menu = {
  __typename: "menu",
  id: string,
  menu?: string | null,
  amountOfMoney?: number | null,
  treatmentTime?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMenuInput = {
  id: string,
  menu?: string | null,
  amountOfMoney?: number | null,
  treatmentTime?: number | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateStylistInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelStylistConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStylistConditionInput | null > | null,
  or?: Array< ModelStylistConditionInput | null > | null,
  not?: ModelStylistConditionInput | null,
};

export type stylist = {
  __typename: "stylist",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStylistInput = {
  id: string,
  name?: string | null,
};

export type DeleteStylistInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  name?: string | null,
  mail?: string | null,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  mail?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type customer = {
  __typename: "customer",
  id: string,
  name?: string | null,
  mail?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  mail?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateHolidayInput = {
  id?: string | null,
  date?: string | null,
};

export type ModelHolidayConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelHolidayConditionInput | null > | null,
  or?: Array< ModelHolidayConditionInput | null > | null,
  not?: ModelHolidayConditionInput | null,
};

export type holiday = {
  __typename: "holiday",
  id: string,
  date?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHolidayInput = {
  id: string,
  date?: string | null,
};

export type DeleteHolidayInput = {
  id: string,
};

export type CreateShopmenuInput = {
  id?: string | null,
  menu?: string | null,
  detail?: string | null,
  amountOfMoney?: number | null,
  treatmentTime?: number | null,
};

export type ModelShopmenuConditionInput = {
  menu?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  amountOfMoney?: ModelIntInput | null,
  treatmentTime?: ModelIntInput | null,
  and?: Array< ModelShopmenuConditionInput | null > | null,
  or?: Array< ModelShopmenuConditionInput | null > | null,
  not?: ModelShopmenuConditionInput | null,
};

export type shopmenu = {
  __typename: "shopmenu",
  id: string,
  menu?: string | null,
  detail?: string | null,
  amountOfMoney?: number | null,
  treatmentTime?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateShopmenuInput = {
  id: string,
  menu?: string | null,
  detail?: string | null,
  amountOfMoney?: number | null,
  treatmentTime?: number | null,
};

export type DeleteShopmenuInput = {
  id: string,
};

export type CreateReserveInput = {
  id?: string | null,
  date?: string | null,
  menu?: string | null,
  stylistId?: number | null,
  customerId?: string | null,
};

export type ModelReserveConditionInput = {
  date?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  stylistId?: ModelIntInput | null,
  customerId?: ModelStringInput | null,
  and?: Array< ModelReserveConditionInput | null > | null,
  or?: Array< ModelReserveConditionInput | null > | null,
  not?: ModelReserveConditionInput | null,
};

export type reserve = {
  __typename: "reserve",
  id: string,
  date?: string | null,
  menu?: string | null,
  stylistId?: number | null,
  customerId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReserveInput = {
  id: string,
  date?: string | null,
  menu?: string | null,
  stylistId?: number | null,
  customerId?: string | null,
};

export type DeleteReserveInput = {
  id: string,
};

export type ModelReservationFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  stylistId?: ModelIntInput | null,
  customerId?: ModelStringInput | null,
  and?: Array< ModelReservationFilterInput | null > | null,
  or?: Array< ModelReservationFilterInput | null > | null,
  not?: ModelReservationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelReservationConnection = {
  __typename: "ModelReservationConnection",
  items:  Array<reservation | null >,
  nextToken?: string | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  menu?: ModelStringInput | null,
  amountOfMoney?: ModelIntInput | null,
  treatmentTime?: ModelIntInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<menu | null >,
  nextToken?: string | null,
};

export type ModelStylistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStylistFilterInput | null > | null,
  or?: Array< ModelStylistFilterInput | null > | null,
  not?: ModelStylistFilterInput | null,
};

export type ModelStylistConnection = {
  __typename: "ModelStylistConnection",
  items:  Array<stylist | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  mail?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<customer | null >,
  nextToken?: string | null,
};

export type ModelHolidayFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelHolidayFilterInput | null > | null,
  or?: Array< ModelHolidayFilterInput | null > | null,
  not?: ModelHolidayFilterInput | null,
};

export type ModelHolidayConnection = {
  __typename: "ModelHolidayConnection",
  items:  Array<holiday | null >,
  nextToken?: string | null,
};

export type ModelShopmenuFilterInput = {
  id?: ModelIDInput | null,
  menu?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  amountOfMoney?: ModelIntInput | null,
  treatmentTime?: ModelIntInput | null,
  and?: Array< ModelShopmenuFilterInput | null > | null,
  or?: Array< ModelShopmenuFilterInput | null > | null,
  not?: ModelShopmenuFilterInput | null,
};

export type ModelShopmenuConnection = {
  __typename: "ModelShopmenuConnection",
  items:  Array<shopmenu | null >,
  nextToken?: string | null,
};

export type ModelReserveFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  stylistId?: ModelIntInput | null,
  customerId?: ModelStringInput | null,
  and?: Array< ModelReserveFilterInput | null > | null,
  or?: Array< ModelReserveFilterInput | null > | null,
  not?: ModelReserveFilterInput | null,
};

export type ModelReserveConnection = {
  __typename: "ModelReserveConnection",
  items:  Array<reserve | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionReservationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  menu?: ModelSubscriptionStringInput | null,
  stylistId?: ModelSubscriptionIntInput | null,
  customerId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReservationFilterInput | null > | null,
  or?: Array< ModelSubscriptionReservationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  menu?: ModelSubscriptionStringInput | null,
  amountOfMoney?: ModelSubscriptionIntInput | null,
  treatmentTime?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuFilterInput | null > | null,
};

export type ModelSubscriptionStylistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStylistFilterInput | null > | null,
  or?: Array< ModelSubscriptionStylistFilterInput | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  mail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionHolidayFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHolidayFilterInput | null > | null,
  or?: Array< ModelSubscriptionHolidayFilterInput | null > | null,
};

export type ModelSubscriptionShopmenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  menu?: ModelSubscriptionStringInput | null,
  detail?: ModelSubscriptionStringInput | null,
  amountOfMoney?: ModelSubscriptionIntInput | null,
  treatmentTime?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionShopmenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionShopmenuFilterInput | null > | null,
};

export type ModelSubscriptionReserveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  menu?: ModelSubscriptionStringInput | null,
  stylistId?: ModelSubscriptionIntInput | null,
  customerId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReserveFilterInput | null > | null,
  or?: Array< ModelSubscriptionReserveFilterInput | null > | null,
};

export type CreateReservationMutationVariables = {
  input: CreateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type CreateReservationMutation = {
  createReservation?:  {
    __typename: "reservation",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReservationMutationVariables = {
  input: UpdateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type UpdateReservationMutation = {
  updateReservation?:  {
    __typename: "reservation",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReservationMutationVariables = {
  input: DeleteReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type DeleteReservationMutation = {
  deleteReservation?:  {
    __typename: "reservation",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "menu",
    id: string,
    menu?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "menu",
    id: string,
    menu?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "menu",
    id: string,
    menu?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStylistMutationVariables = {
  input: CreateStylistInput,
  condition?: ModelStylistConditionInput | null,
};

export type CreateStylistMutation = {
  createStylist?:  {
    __typename: "stylist",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStylistMutationVariables = {
  input: UpdateStylistInput,
  condition?: ModelStylistConditionInput | null,
};

export type UpdateStylistMutation = {
  updateStylist?:  {
    __typename: "stylist",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStylistMutationVariables = {
  input: DeleteStylistInput,
  condition?: ModelStylistConditionInput | null,
};

export type DeleteStylistMutation = {
  deleteStylist?:  {
    __typename: "stylist",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "customer",
    id: string,
    name?: string | null,
    mail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "customer",
    id: string,
    name?: string | null,
    mail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "customer",
    id: string,
    name?: string | null,
    mail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHolidayMutationVariables = {
  input: CreateHolidayInput,
  condition?: ModelHolidayConditionInput | null,
};

export type CreateHolidayMutation = {
  createHoliday?:  {
    __typename: "holiday",
    id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHolidayMutationVariables = {
  input: UpdateHolidayInput,
  condition?: ModelHolidayConditionInput | null,
};

export type UpdateHolidayMutation = {
  updateHoliday?:  {
    __typename: "holiday",
    id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHolidayMutationVariables = {
  input: DeleteHolidayInput,
  condition?: ModelHolidayConditionInput | null,
};

export type DeleteHolidayMutation = {
  deleteHoliday?:  {
    __typename: "holiday",
    id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShopmenuMutationVariables = {
  input: CreateShopmenuInput,
  condition?: ModelShopmenuConditionInput | null,
};

export type CreateShopmenuMutation = {
  createShopmenu?:  {
    __typename: "shopmenu",
    id: string,
    menu?: string | null,
    detail?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShopmenuMutationVariables = {
  input: UpdateShopmenuInput,
  condition?: ModelShopmenuConditionInput | null,
};

export type UpdateShopmenuMutation = {
  updateShopmenu?:  {
    __typename: "shopmenu",
    id: string,
    menu?: string | null,
    detail?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShopmenuMutationVariables = {
  input: DeleteShopmenuInput,
  condition?: ModelShopmenuConditionInput | null,
};

export type DeleteShopmenuMutation = {
  deleteShopmenu?:  {
    __typename: "shopmenu",
    id: string,
    menu?: string | null,
    detail?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReserveMutationVariables = {
  input: CreateReserveInput,
  condition?: ModelReserveConditionInput | null,
};

export type CreateReserveMutation = {
  createReserve?:  {
    __typename: "reserve",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReserveMutationVariables = {
  input: UpdateReserveInput,
  condition?: ModelReserveConditionInput | null,
};

export type UpdateReserveMutation = {
  updateReserve?:  {
    __typename: "reserve",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReserveMutationVariables = {
  input: DeleteReserveInput,
  condition?: ModelReserveConditionInput | null,
};

export type DeleteReserveMutation = {
  deleteReserve?:  {
    __typename: "reserve",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReservationQueryVariables = {
  id: string,
};

export type GetReservationQuery = {
  getReservation?:  {
    __typename: "reservation",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReservationsQueryVariables = {
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservationsQuery = {
  listReservations?:  {
    __typename: "ModelReservationConnection",
    items:  Array< {
      __typename: "reservation",
      id: string,
      date?: string | null,
      menu?: string | null,
      stylistId?: number | null,
      customerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "menu",
    id: string,
    menu?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "menu",
      id: string,
      menu?: string | null,
      amountOfMoney?: number | null,
      treatmentTime?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStylistQueryVariables = {
  id: string,
};

export type GetStylistQuery = {
  getStylist?:  {
    __typename: "stylist",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStylistsQueryVariables = {
  filter?: ModelStylistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStylistsQuery = {
  listStylists?:  {
    __typename: "ModelStylistConnection",
    items:  Array< {
      __typename: "stylist",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "customer",
    id: string,
    name?: string | null,
    mail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "customer",
      id: string,
      name?: string | null,
      mail?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHolidayQueryVariables = {
  id: string,
};

export type GetHolidayQuery = {
  getHoliday?:  {
    __typename: "holiday",
    id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHolidaysQueryVariables = {
  filter?: ModelHolidayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHolidaysQuery = {
  listHolidays?:  {
    __typename: "ModelHolidayConnection",
    items:  Array< {
      __typename: "holiday",
      id: string,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetShopmenuQueryVariables = {
  id: string,
};

export type GetShopmenuQuery = {
  getShopmenu?:  {
    __typename: "shopmenu",
    id: string,
    menu?: string | null,
    detail?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShopmenusQueryVariables = {
  filter?: ModelShopmenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShopmenusQuery = {
  listShopmenus?:  {
    __typename: "ModelShopmenuConnection",
    items:  Array< {
      __typename: "shopmenu",
      id: string,
      menu?: string | null,
      detail?: string | null,
      amountOfMoney?: number | null,
      treatmentTime?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReserveQueryVariables = {
  id: string,
};

export type GetReserveQuery = {
  getReserve?:  {
    __typename: "reserve",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReservesQueryVariables = {
  filter?: ModelReserveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservesQuery = {
  listReserves?:  {
    __typename: "ModelReserveConnection",
    items:  Array< {
      __typename: "reserve",
      id: string,
      date?: string | null,
      menu?: string | null,
      stylistId?: number | null,
      customerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnCreateReservationSubscription = {
  onCreateReservation?:  {
    __typename: "reservation",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnUpdateReservationSubscription = {
  onUpdateReservation?:  {
    __typename: "reservation",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnDeleteReservationSubscription = {
  onDeleteReservation?:  {
    __typename: "reservation",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "menu",
    id: string,
    menu?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "menu",
    id: string,
    menu?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "menu",
    id: string,
    menu?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStylistSubscriptionVariables = {
  filter?: ModelSubscriptionStylistFilterInput | null,
};

export type OnCreateStylistSubscription = {
  onCreateStylist?:  {
    __typename: "stylist",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStylistSubscriptionVariables = {
  filter?: ModelSubscriptionStylistFilterInput | null,
};

export type OnUpdateStylistSubscription = {
  onUpdateStylist?:  {
    __typename: "stylist",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStylistSubscriptionVariables = {
  filter?: ModelSubscriptionStylistFilterInput | null,
};

export type OnDeleteStylistSubscription = {
  onDeleteStylist?:  {
    __typename: "stylist",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "customer",
    id: string,
    name?: string | null,
    mail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "customer",
    id: string,
    name?: string | null,
    mail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "customer",
    id: string,
    name?: string | null,
    mail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHolidaySubscriptionVariables = {
  filter?: ModelSubscriptionHolidayFilterInput | null,
};

export type OnCreateHolidaySubscription = {
  onCreateHoliday?:  {
    __typename: "holiday",
    id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHolidaySubscriptionVariables = {
  filter?: ModelSubscriptionHolidayFilterInput | null,
};

export type OnUpdateHolidaySubscription = {
  onUpdateHoliday?:  {
    __typename: "holiday",
    id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHolidaySubscriptionVariables = {
  filter?: ModelSubscriptionHolidayFilterInput | null,
};

export type OnDeleteHolidaySubscription = {
  onDeleteHoliday?:  {
    __typename: "holiday",
    id: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShopmenuSubscriptionVariables = {
  filter?: ModelSubscriptionShopmenuFilterInput | null,
};

export type OnCreateShopmenuSubscription = {
  onCreateShopmenu?:  {
    __typename: "shopmenu",
    id: string,
    menu?: string | null,
    detail?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShopmenuSubscriptionVariables = {
  filter?: ModelSubscriptionShopmenuFilterInput | null,
};

export type OnUpdateShopmenuSubscription = {
  onUpdateShopmenu?:  {
    __typename: "shopmenu",
    id: string,
    menu?: string | null,
    detail?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShopmenuSubscriptionVariables = {
  filter?: ModelSubscriptionShopmenuFilterInput | null,
};

export type OnDeleteShopmenuSubscription = {
  onDeleteShopmenu?:  {
    __typename: "shopmenu",
    id: string,
    menu?: string | null,
    detail?: string | null,
    amountOfMoney?: number | null,
    treatmentTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReserveSubscriptionVariables = {
  filter?: ModelSubscriptionReserveFilterInput | null,
};

export type OnCreateReserveSubscription = {
  onCreateReserve?:  {
    __typename: "reserve",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReserveSubscriptionVariables = {
  filter?: ModelSubscriptionReserveFilterInput | null,
};

export type OnUpdateReserveSubscription = {
  onUpdateReserve?:  {
    __typename: "reserve",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReserveSubscriptionVariables = {
  filter?: ModelSubscriptionReserveFilterInput | null,
};

export type OnDeleteReserveSubscription = {
  onDeleteReserve?:  {
    __typename: "reserve",
    id: string,
    date?: string | null,
    menu?: string | null,
    stylistId?: number | null,
    customerId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

import { BreweryType } from "../types/breweryType"
import { SortType } from "../types/sortType"

export interface IBreweryRequestParams {
  id?: string,
  by_city?:string,
  per_page?:number,
  by_distance?:Number[],
  by_ids?: String[],
  by_name?:string,
  by_state?:string,
  by_postal?:number,
  by_type?:BreweryType,
  page?:number,
  by_sort?:SortType
}
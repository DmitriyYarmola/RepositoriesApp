import { AppStateType } from '../../../lib/store/index'

export const pageSize = (state: AppStateType): number => state.PaginatorReducer.pageSize

export const portionSize = (state: AppStateType): number =>
    state.PaginatorReducer.portionSize

export const currentPage = (state: AppStateType): number | null =>
    state.PaginatorReducer.currentPage

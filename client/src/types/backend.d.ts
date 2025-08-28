/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2025-08-27 21:36:41.

export interface HabitTrackerApplication {
}

export interface Session {
    id: number;
    startTime: Date;
    endTime: Date;
    user: User;
}

export interface SessionBuilder {
}

export interface SessionService {
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserBuilder {
}

export interface UserController {
}

export interface UserRepo extends JpaRepository<User, number> {
}

export interface UserService {
}

export interface JpaRepository<T, ID> extends ListCrudRepository<T, ID>, ListPagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {
}

export interface ListCrudRepository<T, ID> extends CrudRepository<T, ID> {
}

export interface ListPagingAndSortingRepository<T, ID> extends PagingAndSortingRepository<T, ID> {
}

export interface QueryByExampleExecutor<T> {
}

export interface CrudRepository<T, ID> extends Repository<T, ID> {
}

export interface PagingAndSortingRepository<T, ID> extends CrudRepository<T, ID> {
}

export interface Repository<T, ID> {
}

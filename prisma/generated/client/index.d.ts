
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model JobTitle
 * 
 */
export type JobTitle = $Result.DefaultSelection<Prisma.$JobTitlePayload>
/**
 * Model LeaveRequest
 * 
 */
export type LeaveRequest = $Result.DefaultSelection<Prisma.$LeaveRequestPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model PerformanceReview
 * 
 */
export type PerformanceReview = $Result.DefaultSelection<Prisma.$PerformanceReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  HR_ADMIN: 'HR_ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const LeaveType: {
  VACATION: 'VACATION',
  SICK: 'SICK',
  PERSONAL: 'PERSONAL',
  MATERNITY: 'MATERNITY',
  PATERNITY: 'PATERNITY',
  UNPAID: 'UNPAID'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const LeaveStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]


export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  LATE: 'LATE',
  HALF_DAY: 'HALF_DAY',
  ABSENT: 'ABSENT'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const ReviewPeriod: {
  Q1: 'Q1',
  Q2: 'Q2',
  Q3: 'Q3',
  Q4: 'Q4',
  ANNUAL: 'ANNUAL',
  PROBATION: 'PROBATION'
};

export type ReviewPeriod = (typeof ReviewPeriod)[keyof typeof ReviewPeriod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type ReviewPeriod = $Enums.ReviewPeriod

export const ReviewPeriod: typeof $Enums.ReviewPeriod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobTitle`: Exposes CRUD operations for the **JobTitle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobTitles
    * const jobTitles = await prisma.jobTitle.findMany()
    * ```
    */
  get jobTitle(): Prisma.JobTitleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveRequest`: Exposes CRUD operations for the **LeaveRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveRequests
    * const leaveRequests = await prisma.leaveRequest.findMany()
    * ```
    */
  get leaveRequest(): Prisma.LeaveRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.performanceReview`: Exposes CRUD operations for the **PerformanceReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerformanceReviews
    * const performanceReviews = await prisma.performanceReview.findMany()
    * ```
    */
  get performanceReview(): Prisma.PerformanceReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Employee: 'Employee',
    Department: 'Department',
    JobTitle: 'JobTitle',
    LeaveRequest: 'LeaveRequest',
    Attendance: 'Attendance',
    PerformanceReview: 'PerformanceReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "employee" | "department" | "jobTitle" | "leaveRequest" | "attendance" | "performanceReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      JobTitle: {
        payload: Prisma.$JobTitlePayload<ExtArgs>
        fields: Prisma.JobTitleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobTitleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobTitleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          findFirst: {
            args: Prisma.JobTitleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobTitleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          findMany: {
            args: Prisma.JobTitleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>[]
          }
          create: {
            args: Prisma.JobTitleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          createMany: {
            args: Prisma.JobTitleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobTitleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>[]
          }
          delete: {
            args: Prisma.JobTitleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          update: {
            args: Prisma.JobTitleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          deleteMany: {
            args: Prisma.JobTitleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobTitleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobTitleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>[]
          }
          upsert: {
            args: Prisma.JobTitleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          aggregate: {
            args: Prisma.JobTitleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobTitle>
          }
          groupBy: {
            args: Prisma.JobTitleGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobTitleGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobTitleCountArgs<ExtArgs>
            result: $Utils.Optional<JobTitleCountAggregateOutputType> | number
          }
        }
      }
      LeaveRequest: {
        payload: Prisma.$LeaveRequestPayload<ExtArgs>
        fields: Prisma.LeaveRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findFirst: {
            args: Prisma.LeaveRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findMany: {
            args: Prisma.LeaveRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          create: {
            args: Prisma.LeaveRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          createMany: {
            args: Prisma.LeaveRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          delete: {
            args: Prisma.LeaveRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          update: {
            args: Prisma.LeaveRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          deleteMany: {
            args: Prisma.LeaveRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          upsert: {
            args: Prisma.LeaveRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          aggregate: {
            args: Prisma.LeaveRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveRequest>
          }
          groupBy: {
            args: Prisma.LeaveRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      PerformanceReview: {
        payload: Prisma.$PerformanceReviewPayload<ExtArgs>
        fields: Prisma.PerformanceReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerformanceReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerformanceReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>
          }
          findFirst: {
            args: Prisma.PerformanceReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerformanceReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>
          }
          findMany: {
            args: Prisma.PerformanceReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>[]
          }
          create: {
            args: Prisma.PerformanceReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>
          }
          createMany: {
            args: Prisma.PerformanceReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerformanceReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>[]
          }
          delete: {
            args: Prisma.PerformanceReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>
          }
          update: {
            args: Prisma.PerformanceReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>
          }
          deleteMany: {
            args: Prisma.PerformanceReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerformanceReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerformanceReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>[]
          }
          upsert: {
            args: Prisma.PerformanceReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>
          }
          aggregate: {
            args: Prisma.PerformanceReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerformanceReview>
          }
          groupBy: {
            args: Prisma.PerformanceReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerformanceReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerformanceReviewCountArgs<ExtArgs>
            result: $Utils.Optional<PerformanceReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    employee?: EmployeeOmit
    department?: DepartmentOmit
    jobTitle?: JobTitleOmit
    leaveRequest?: LeaveRequestOmit
    attendance?: AttendanceOmit
    performanceReview?: PerformanceReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    reports: number
    leaveRequests: number
    reviewedLeaveRequests: number
    attendanceRecords: number
    performanceReviews: number
    givenReviews: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | EmployeeCountOutputTypeCountReportsArgs
    leaveRequests?: boolean | EmployeeCountOutputTypeCountLeaveRequestsArgs
    reviewedLeaveRequests?: boolean | EmployeeCountOutputTypeCountReviewedLeaveRequestsArgs
    attendanceRecords?: boolean | EmployeeCountOutputTypeCountAttendanceRecordsArgs
    performanceReviews?: boolean | EmployeeCountOutputTypeCountPerformanceReviewsArgs
    givenReviews?: boolean | EmployeeCountOutputTypeCountGivenReviewsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLeaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountReviewedLeaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPerformanceReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceReviewWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountGivenReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceReviewWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    employees: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartmentCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type JobTitleCountOutputType
   */

  export type JobTitleCountOutputType = {
    employees: number
  }

  export type JobTitleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | JobTitleCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * JobTitleCountOutputType without action
   */
  export type JobTitleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleCountOutputType
     */
    select?: JobTitleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobTitleCountOutputType without action
   */
  export type JobTitleCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    userId: string | null
    departmentId: string | null
    jobTitleId: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    userId: string | null
    departmentId: string | null
    jobTitleId: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    userId: number
    departmentId: number
    jobTitleId: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userId?: true
    departmentId?: true
    jobTitleId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userId?: true
    departmentId?: true
    jobTitleId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userId?: true
    departmentId?: true
    jobTitleId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    userId: string
    departmentId: string | null
    jobTitleId: string | null
    managerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    departmentId?: boolean
    jobTitleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    jobTitle?: boolean | Employee$jobTitleArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
    reports?: boolean | Employee$reportsArgs<ExtArgs>
    leaveRequests?: boolean | Employee$leaveRequestsArgs<ExtArgs>
    reviewedLeaveRequests?: boolean | Employee$reviewedLeaveRequestsArgs<ExtArgs>
    attendanceRecords?: boolean | Employee$attendanceRecordsArgs<ExtArgs>
    performanceReviews?: boolean | Employee$performanceReviewsArgs<ExtArgs>
    givenReviews?: boolean | Employee$givenReviewsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    departmentId?: boolean
    jobTitleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    jobTitle?: boolean | Employee$jobTitleArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    departmentId?: boolean
    jobTitleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    jobTitle?: boolean | Employee$jobTitleArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    departmentId?: boolean
    jobTitleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "userId" | "departmentId" | "jobTitleId" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    jobTitle?: boolean | Employee$jobTitleArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
    reports?: boolean | Employee$reportsArgs<ExtArgs>
    leaveRequests?: boolean | Employee$leaveRequestsArgs<ExtArgs>
    reviewedLeaveRequests?: boolean | Employee$reviewedLeaveRequestsArgs<ExtArgs>
    attendanceRecords?: boolean | Employee$attendanceRecordsArgs<ExtArgs>
    performanceReviews?: boolean | Employee$performanceReviewsArgs<ExtArgs>
    givenReviews?: boolean | Employee$givenReviewsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    jobTitle?: boolean | Employee$jobTitleArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    jobTitle?: boolean | Employee$jobTitleArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      jobTitle: Prisma.$JobTitlePayload<ExtArgs> | null
      manager: Prisma.$EmployeePayload<ExtArgs> | null
      reports: Prisma.$EmployeePayload<ExtArgs>[]
      leaveRequests: Prisma.$LeaveRequestPayload<ExtArgs>[]
      reviewedLeaveRequests: Prisma.$LeaveRequestPayload<ExtArgs>[]
      attendanceRecords: Prisma.$AttendancePayload<ExtArgs>[]
      performanceReviews: Prisma.$PerformanceReviewPayload<ExtArgs>[]
      givenReviews: Prisma.$PerformanceReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      userId: string
      departmentId: string | null
      jobTitleId: string | null
      managerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends Employee$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Employee$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobTitle<T extends Employee$jobTitleArgs<ExtArgs> = {}>(args?: Subset<T, Employee$jobTitleArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    manager<T extends Employee$managerArgs<ExtArgs> = {}>(args?: Subset<T, Employee$managerArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reports<T extends Employee$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaveRequests<T extends Employee$leaveRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$leaveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedLeaveRequests<T extends Employee$reviewedLeaveRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$reviewedLeaveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendanceRecords<T extends Employee$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    performanceReviews<T extends Employee$performanceReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$performanceReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    givenReviews<T extends Employee$givenReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$givenReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly userId: FieldRef<"Employee", 'String'>
    readonly departmentId: FieldRef<"Employee", 'String'>
    readonly jobTitleId: FieldRef<"Employee", 'String'>
    readonly managerId: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.department
   */
  export type Employee$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Employee.jobTitle
   */
  export type Employee$jobTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    where?: JobTitleWhereInput
  }

  /**
   * Employee.manager
   */
  export type Employee$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Employee.reports
   */
  export type Employee$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee.leaveRequests
   */
  export type Employee$leaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * Employee.reviewedLeaveRequests
   */
  export type Employee$reviewedLeaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * Employee.attendanceRecords
   */
  export type Employee$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Employee.performanceReviews
   */
  export type Employee$performanceReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    where?: PerformanceReviewWhereInput
    orderBy?: PerformanceReviewOrderByWithRelationInput | PerformanceReviewOrderByWithRelationInput[]
    cursor?: PerformanceReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerformanceReviewScalarFieldEnum | PerformanceReviewScalarFieldEnum[]
  }

  /**
   * Employee.givenReviews
   */
  export type Employee$givenReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    where?: PerformanceReviewWhereInput
    orderBy?: PerformanceReviewOrderByWithRelationInput | PerformanceReviewOrderByWithRelationInput[]
    cursor?: PerformanceReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerformanceReviewScalarFieldEnum | PerformanceReviewScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Department$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Department$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.employees
   */
  export type Department$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model JobTitle
   */

  export type AggregateJobTitle = {
    _count: JobTitleCountAggregateOutputType | null
    _min: JobTitleMinAggregateOutputType | null
    _max: JobTitleMaxAggregateOutputType | null
  }

  export type JobTitleMinAggregateOutputType = {
    id: string | null
    title: string | null
    salaryGrade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobTitleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    salaryGrade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobTitleCountAggregateOutputType = {
    id: number
    title: number
    salaryGrade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobTitleMinAggregateInputType = {
    id?: true
    title?: true
    salaryGrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobTitleMaxAggregateInputType = {
    id?: true
    title?: true
    salaryGrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobTitleCountAggregateInputType = {
    id?: true
    title?: true
    salaryGrade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobTitleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTitle to aggregate.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobTitles
    **/
    _count?: true | JobTitleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobTitleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobTitleMaxAggregateInputType
  }

  export type GetJobTitleAggregateType<T extends JobTitleAggregateArgs> = {
        [P in keyof T & keyof AggregateJobTitle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobTitle[P]>
      : GetScalarType<T[P], AggregateJobTitle[P]>
  }




  export type JobTitleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTitleWhereInput
    orderBy?: JobTitleOrderByWithAggregationInput | JobTitleOrderByWithAggregationInput[]
    by: JobTitleScalarFieldEnum[] | JobTitleScalarFieldEnum
    having?: JobTitleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobTitleCountAggregateInputType | true
    _min?: JobTitleMinAggregateInputType
    _max?: JobTitleMaxAggregateInputType
  }

  export type JobTitleGroupByOutputType = {
    id: string
    title: string
    salaryGrade: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobTitleCountAggregateOutputType | null
    _min: JobTitleMinAggregateOutputType | null
    _max: JobTitleMaxAggregateOutputType | null
  }

  type GetJobTitleGroupByPayload<T extends JobTitleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobTitleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobTitleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobTitleGroupByOutputType[P]>
            : GetScalarType<T[P], JobTitleGroupByOutputType[P]>
        }
      >
    >


  export type JobTitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    salaryGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | JobTitle$employeesArgs<ExtArgs>
    _count?: boolean | JobTitleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTitle"]>

  export type JobTitleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    salaryGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobTitle"]>

  export type JobTitleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    salaryGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobTitle"]>

  export type JobTitleSelectScalar = {
    id?: boolean
    title?: boolean
    salaryGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobTitleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "salaryGrade" | "createdAt" | "updatedAt", ExtArgs["result"]["jobTitle"]>
  export type JobTitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | JobTitle$employeesArgs<ExtArgs>
    _count?: boolean | JobTitleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobTitleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobTitleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobTitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobTitle"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      salaryGrade: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobTitle"]>
    composites: {}
  }

  type JobTitleGetPayload<S extends boolean | null | undefined | JobTitleDefaultArgs> = $Result.GetResult<Prisma.$JobTitlePayload, S>

  type JobTitleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobTitleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobTitleCountAggregateInputType | true
    }

  export interface JobTitleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobTitle'], meta: { name: 'JobTitle' } }
    /**
     * Find zero or one JobTitle that matches the filter.
     * @param {JobTitleFindUniqueArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobTitleFindUniqueArgs>(args: SelectSubset<T, JobTitleFindUniqueArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobTitle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobTitleFindUniqueOrThrowArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobTitleFindUniqueOrThrowArgs>(args: SelectSubset<T, JobTitleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTitle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleFindFirstArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobTitleFindFirstArgs>(args?: SelectSubset<T, JobTitleFindFirstArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTitle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleFindFirstOrThrowArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobTitleFindFirstOrThrowArgs>(args?: SelectSubset<T, JobTitleFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobTitles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobTitles
     * const jobTitles = await prisma.jobTitle.findMany()
     * 
     * // Get first 10 JobTitles
     * const jobTitles = await prisma.jobTitle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobTitleWithIdOnly = await prisma.jobTitle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobTitleFindManyArgs>(args?: SelectSubset<T, JobTitleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobTitle.
     * @param {JobTitleCreateArgs} args - Arguments to create a JobTitle.
     * @example
     * // Create one JobTitle
     * const JobTitle = await prisma.jobTitle.create({
     *   data: {
     *     // ... data to create a JobTitle
     *   }
     * })
     * 
     */
    create<T extends JobTitleCreateArgs>(args: SelectSubset<T, JobTitleCreateArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobTitles.
     * @param {JobTitleCreateManyArgs} args - Arguments to create many JobTitles.
     * @example
     * // Create many JobTitles
     * const jobTitle = await prisma.jobTitle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobTitleCreateManyArgs>(args?: SelectSubset<T, JobTitleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobTitles and returns the data saved in the database.
     * @param {JobTitleCreateManyAndReturnArgs} args - Arguments to create many JobTitles.
     * @example
     * // Create many JobTitles
     * const jobTitle = await prisma.jobTitle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobTitles and only return the `id`
     * const jobTitleWithIdOnly = await prisma.jobTitle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobTitleCreateManyAndReturnArgs>(args?: SelectSubset<T, JobTitleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobTitle.
     * @param {JobTitleDeleteArgs} args - Arguments to delete one JobTitle.
     * @example
     * // Delete one JobTitle
     * const JobTitle = await prisma.jobTitle.delete({
     *   where: {
     *     // ... filter to delete one JobTitle
     *   }
     * })
     * 
     */
    delete<T extends JobTitleDeleteArgs>(args: SelectSubset<T, JobTitleDeleteArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobTitle.
     * @param {JobTitleUpdateArgs} args - Arguments to update one JobTitle.
     * @example
     * // Update one JobTitle
     * const jobTitle = await prisma.jobTitle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobTitleUpdateArgs>(args: SelectSubset<T, JobTitleUpdateArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobTitles.
     * @param {JobTitleDeleteManyArgs} args - Arguments to filter JobTitles to delete.
     * @example
     * // Delete a few JobTitles
     * const { count } = await prisma.jobTitle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobTitleDeleteManyArgs>(args?: SelectSubset<T, JobTitleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobTitles
     * const jobTitle = await prisma.jobTitle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobTitleUpdateManyArgs>(args: SelectSubset<T, JobTitleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTitles and returns the data updated in the database.
     * @param {JobTitleUpdateManyAndReturnArgs} args - Arguments to update many JobTitles.
     * @example
     * // Update many JobTitles
     * const jobTitle = await prisma.jobTitle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobTitles and only return the `id`
     * const jobTitleWithIdOnly = await prisma.jobTitle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobTitleUpdateManyAndReturnArgs>(args: SelectSubset<T, JobTitleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobTitle.
     * @param {JobTitleUpsertArgs} args - Arguments to update or create a JobTitle.
     * @example
     * // Update or create a JobTitle
     * const jobTitle = await prisma.jobTitle.upsert({
     *   create: {
     *     // ... data to create a JobTitle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobTitle we want to update
     *   }
     * })
     */
    upsert<T extends JobTitleUpsertArgs>(args: SelectSubset<T, JobTitleUpsertArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleCountArgs} args - Arguments to filter JobTitles to count.
     * @example
     * // Count the number of JobTitles
     * const count = await prisma.jobTitle.count({
     *   where: {
     *     // ... the filter for the JobTitles we want to count
     *   }
     * })
    **/
    count<T extends JobTitleCountArgs>(
      args?: Subset<T, JobTitleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobTitleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobTitleAggregateArgs>(args: Subset<T, JobTitleAggregateArgs>): Prisma.PrismaPromise<GetJobTitleAggregateType<T>>

    /**
     * Group by JobTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobTitleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobTitleGroupByArgs['orderBy'] }
        : { orderBy?: JobTitleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobTitleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobTitleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobTitle model
   */
  readonly fields: JobTitleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobTitle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobTitleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends JobTitle$employeesArgs<ExtArgs> = {}>(args?: Subset<T, JobTitle$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobTitle model
   */
  interface JobTitleFieldRefs {
    readonly id: FieldRef<"JobTitle", 'String'>
    readonly title: FieldRef<"JobTitle", 'String'>
    readonly salaryGrade: FieldRef<"JobTitle", 'String'>
    readonly createdAt: FieldRef<"JobTitle", 'DateTime'>
    readonly updatedAt: FieldRef<"JobTitle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobTitle findUnique
   */
  export type JobTitleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle findUniqueOrThrow
   */
  export type JobTitleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle findFirst
   */
  export type JobTitleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTitles.
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTitles.
     */
    distinct?: JobTitleScalarFieldEnum | JobTitleScalarFieldEnum[]
  }

  /**
   * JobTitle findFirstOrThrow
   */
  export type JobTitleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTitles.
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTitles.
     */
    distinct?: JobTitleScalarFieldEnum | JobTitleScalarFieldEnum[]
  }

  /**
   * JobTitle findMany
   */
  export type JobTitleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitles to fetch.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobTitles.
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTitles.
     */
    distinct?: JobTitleScalarFieldEnum | JobTitleScalarFieldEnum[]
  }

  /**
   * JobTitle create
   */
  export type JobTitleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * The data needed to create a JobTitle.
     */
    data: XOR<JobTitleCreateInput, JobTitleUncheckedCreateInput>
  }

  /**
   * JobTitle createMany
   */
  export type JobTitleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobTitles.
     */
    data: JobTitleCreateManyInput | JobTitleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobTitle createManyAndReturn
   */
  export type JobTitleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * The data used to create many JobTitles.
     */
    data: JobTitleCreateManyInput | JobTitleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobTitle update
   */
  export type JobTitleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * The data needed to update a JobTitle.
     */
    data: XOR<JobTitleUpdateInput, JobTitleUncheckedUpdateInput>
    /**
     * Choose, which JobTitle to update.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle updateMany
   */
  export type JobTitleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobTitles.
     */
    data: XOR<JobTitleUpdateManyMutationInput, JobTitleUncheckedUpdateManyInput>
    /**
     * Filter which JobTitles to update
     */
    where?: JobTitleWhereInput
    /**
     * Limit how many JobTitles to update.
     */
    limit?: number
  }

  /**
   * JobTitle updateManyAndReturn
   */
  export type JobTitleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * The data used to update JobTitles.
     */
    data: XOR<JobTitleUpdateManyMutationInput, JobTitleUncheckedUpdateManyInput>
    /**
     * Filter which JobTitles to update
     */
    where?: JobTitleWhereInput
    /**
     * Limit how many JobTitles to update.
     */
    limit?: number
  }

  /**
   * JobTitle upsert
   */
  export type JobTitleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * The filter to search for the JobTitle to update in case it exists.
     */
    where: JobTitleWhereUniqueInput
    /**
     * In case the JobTitle found by the `where` argument doesn't exist, create a new JobTitle with this data.
     */
    create: XOR<JobTitleCreateInput, JobTitleUncheckedCreateInput>
    /**
     * In case the JobTitle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobTitleUpdateInput, JobTitleUncheckedUpdateInput>
  }

  /**
   * JobTitle delete
   */
  export type JobTitleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter which JobTitle to delete.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle deleteMany
   */
  export type JobTitleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTitles to delete
     */
    where?: JobTitleWhereInput
    /**
     * Limit how many JobTitles to delete.
     */
    limit?: number
  }

  /**
   * JobTitle.employees
   */
  export type JobTitle$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * JobTitle without action
   */
  export type JobTitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
  }


  /**
   * Model LeaveRequest
   */

  export type AggregateLeaveRequest = {
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  export type LeaveRequestMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    reviewedById: string | null
    reviewNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveRequestMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    reviewedById: string | null
    reviewNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveRequestCountAggregateOutputType = {
    id: number
    employeeId: number
    leaveType: number
    startDate: number
    endDate: number
    reason: number
    status: number
    reviewedById: number
    reviewNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaveRequestMinAggregateInputType = {
    id?: true
    employeeId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    reviewedById?: true
    reviewNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveRequestMaxAggregateInputType = {
    id?: true
    employeeId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    reviewedById?: true
    reviewNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveRequestCountAggregateInputType = {
    id?: true
    employeeId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    reviewedById?: true
    reviewNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaveRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequest to aggregate.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveRequests
    **/
    _count?: true | LeaveRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type GetLeaveRequestAggregateType<T extends LeaveRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveRequest[P]>
      : GetScalarType<T[P], AggregateLeaveRequest[P]>
  }




  export type LeaveRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithAggregationInput | LeaveRequestOrderByWithAggregationInput[]
    by: LeaveRequestScalarFieldEnum[] | LeaveRequestScalarFieldEnum
    having?: LeaveRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveRequestCountAggregateInputType | true
    _min?: LeaveRequestMinAggregateInputType
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type LeaveRequestGroupByOutputType = {
    id: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date
    endDate: Date
    reason: string | null
    status: $Enums.LeaveStatus
    reviewedById: string | null
    reviewNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  type GetLeaveRequestGroupByPayload<T extends LeaveRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
        }
      >
    >


  export type LeaveRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewedBy?: boolean | LeaveRequest$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewedBy?: boolean | LeaveRequest$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewedBy?: boolean | LeaveRequest$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectScalar = {
    id?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaveRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "leaveType" | "startDate" | "endDate" | "reason" | "status" | "reviewedById" | "reviewNote" | "createdAt" | "updatedAt", ExtArgs["result"]["leaveRequest"]>
  export type LeaveRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewedBy?: boolean | LeaveRequest$reviewedByArgs<ExtArgs>
  }
  export type LeaveRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewedBy?: boolean | LeaveRequest$reviewedByArgs<ExtArgs>
  }
  export type LeaveRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewedBy?: boolean | LeaveRequest$reviewedByArgs<ExtArgs>
  }

  export type $LeaveRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveRequest"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      reviewedBy: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      leaveType: $Enums.LeaveType
      startDate: Date
      endDate: Date
      reason: string | null
      status: $Enums.LeaveStatus
      reviewedById: string | null
      reviewNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaveRequest"]>
    composites: {}
  }

  type LeaveRequestGetPayload<S extends boolean | null | undefined | LeaveRequestDefaultArgs> = $Result.GetResult<Prisma.$LeaveRequestPayload, S>

  type LeaveRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveRequestCountAggregateInputType | true
    }

  export interface LeaveRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveRequest'], meta: { name: 'LeaveRequest' } }
    /**
     * Find zero or one LeaveRequest that matches the filter.
     * @param {LeaveRequestFindUniqueArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveRequestFindUniqueArgs>(args: SelectSubset<T, LeaveRequestFindUniqueArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveRequestFindUniqueOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveRequestFindFirstArgs>(args?: SelectSubset<T, LeaveRequestFindFirstArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany()
     * 
     * // Get first 10 LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveRequestFindManyArgs>(args?: SelectSubset<T, LeaveRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveRequest.
     * @param {LeaveRequestCreateArgs} args - Arguments to create a LeaveRequest.
     * @example
     * // Create one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.create({
     *   data: {
     *     // ... data to create a LeaveRequest
     *   }
     * })
     * 
     */
    create<T extends LeaveRequestCreateArgs>(args: SelectSubset<T, LeaveRequestCreateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveRequests.
     * @param {LeaveRequestCreateManyArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveRequestCreateManyArgs>(args?: SelectSubset<T, LeaveRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveRequests and returns the data saved in the database.
     * @param {LeaveRequestCreateManyAndReturnArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveRequests and only return the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveRequest.
     * @param {LeaveRequestDeleteArgs} args - Arguments to delete one LeaveRequest.
     * @example
     * // Delete one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.delete({
     *   where: {
     *     // ... filter to delete one LeaveRequest
     *   }
     * })
     * 
     */
    delete<T extends LeaveRequestDeleteArgs>(args: SelectSubset<T, LeaveRequestDeleteArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveRequest.
     * @param {LeaveRequestUpdateArgs} args - Arguments to update one LeaveRequest.
     * @example
     * // Update one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveRequestUpdateArgs>(args: SelectSubset<T, LeaveRequestUpdateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveRequests.
     * @param {LeaveRequestDeleteManyArgs} args - Arguments to filter LeaveRequests to delete.
     * @example
     * // Delete a few LeaveRequests
     * const { count } = await prisma.leaveRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveRequestDeleteManyArgs>(args?: SelectSubset<T, LeaveRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveRequestUpdateManyArgs>(args: SelectSubset<T, LeaveRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests and returns the data updated in the database.
     * @param {LeaveRequestUpdateManyAndReturnArgs} args - Arguments to update many LeaveRequests.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveRequests and only return the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaveRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveRequest.
     * @param {LeaveRequestUpsertArgs} args - Arguments to update or create a LeaveRequest.
     * @example
     * // Update or create a LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.upsert({
     *   create: {
     *     // ... data to create a LeaveRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveRequest we want to update
     *   }
     * })
     */
    upsert<T extends LeaveRequestUpsertArgs>(args: SelectSubset<T, LeaveRequestUpsertArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestCountArgs} args - Arguments to filter LeaveRequests to count.
     * @example
     * // Count the number of LeaveRequests
     * const count = await prisma.leaveRequest.count({
     *   where: {
     *     // ... the filter for the LeaveRequests we want to count
     *   }
     * })
    **/
    count<T extends LeaveRequestCountArgs>(
      args?: Subset<T, LeaveRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaveRequestAggregateArgs>(args: Subset<T, LeaveRequestAggregateArgs>): Prisma.PrismaPromise<GetLeaveRequestAggregateType<T>>

    /**
     * Group by LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaveRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveRequestGroupByArgs['orderBy'] }
        : { orderBy?: LeaveRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaveRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveRequest model
   */
  readonly fields: LeaveRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewedBy<T extends LeaveRequest$reviewedByArgs<ExtArgs> = {}>(args?: Subset<T, LeaveRequest$reviewedByArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaveRequest model
   */
  interface LeaveRequestFieldRefs {
    readonly id: FieldRef<"LeaveRequest", 'String'>
    readonly employeeId: FieldRef<"LeaveRequest", 'String'>
    readonly leaveType: FieldRef<"LeaveRequest", 'LeaveType'>
    readonly startDate: FieldRef<"LeaveRequest", 'DateTime'>
    readonly endDate: FieldRef<"LeaveRequest", 'DateTime'>
    readonly reason: FieldRef<"LeaveRequest", 'String'>
    readonly status: FieldRef<"LeaveRequest", 'LeaveStatus'>
    readonly reviewedById: FieldRef<"LeaveRequest", 'String'>
    readonly reviewNote: FieldRef<"LeaveRequest", 'String'>
    readonly createdAt: FieldRef<"LeaveRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"LeaveRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveRequest findUnique
   */
  export type LeaveRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findUniqueOrThrow
   */
  export type LeaveRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findFirst
   */
  export type LeaveRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findFirstOrThrow
   */
  export type LeaveRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findMany
   */
  export type LeaveRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequests to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest create
   */
  export type LeaveRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveRequest.
     */
    data: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
  }

  /**
   * LeaveRequest createMany
   */
  export type LeaveRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveRequest createManyAndReturn
   */
  export type LeaveRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest update
   */
  export type LeaveRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveRequest.
     */
    data: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
    /**
     * Choose, which LeaveRequest to update.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest updateMany
   */
  export type LeaveRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
  }

  /**
   * LeaveRequest updateManyAndReturn
   */
  export type LeaveRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest upsert
   */
  export type LeaveRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveRequest to update in case it exists.
     */
    where: LeaveRequestWhereUniqueInput
    /**
     * In case the LeaveRequest found by the `where` argument doesn't exist, create a new LeaveRequest with this data.
     */
    create: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
    /**
     * In case the LeaveRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
  }

  /**
   * LeaveRequest delete
   */
  export type LeaveRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter which LeaveRequest to delete.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest deleteMany
   */
  export type LeaveRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequests to delete
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to delete.
     */
    limit?: number
  }

  /**
   * LeaveRequest.reviewedBy
   */
  export type LeaveRequest$reviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * LeaveRequest without action
   */
  export type LeaveRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    workHours: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    workHours: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    date: Date | null
    clockIn: Date | null
    clockOut: Date | null
    workHours: number | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    date: Date | null
    clockIn: Date | null
    clockOut: Date | null
    workHours: number | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    employeeId: number
    date: number
    clockIn: number
    clockOut: number
    workHours: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    workHours?: true
  }

  export type AttendanceSumAggregateInputType = {
    workHours?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    clockIn?: true
    clockOut?: true
    workHours?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    clockIn?: true
    clockOut?: true
    workHours?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    clockIn?: true
    clockOut?: true
    workHours?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    employeeId: string
    date: Date
    clockIn: Date
    clockOut: Date | null
    workHours: number | null
    status: $Enums.AttendanceStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    clockIn?: boolean
    clockOut?: boolean
    workHours?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    clockIn?: boolean
    clockOut?: boolean
    workHours?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    clockIn?: boolean
    clockOut?: boolean
    workHours?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    employeeId?: boolean
    date?: boolean
    clockIn?: boolean
    clockOut?: boolean
    workHours?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "date" | "clockIn" | "clockOut" | "workHours" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      date: Date
      clockIn: Date
      clockOut: Date | null
      workHours: number | null
      status: $Enums.AttendanceStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly employeeId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly clockIn: FieldRef<"Attendance", 'DateTime'>
    readonly clockOut: FieldRef<"Attendance", 'DateTime'>
    readonly workHours: FieldRef<"Attendance", 'Float'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly notes: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model PerformanceReview
   */

  export type AggregatePerformanceReview = {
    _count: PerformanceReviewCountAggregateOutputType | null
    _avg: PerformanceReviewAvgAggregateOutputType | null
    _sum: PerformanceReviewSumAggregateOutputType | null
    _min: PerformanceReviewMinAggregateOutputType | null
    _max: PerformanceReviewMaxAggregateOutputType | null
  }

  export type PerformanceReviewAvgAggregateOutputType = {
    year: number | null
    rating: number | null
  }

  export type PerformanceReviewSumAggregateOutputType = {
    year: number | null
    rating: number | null
  }

  export type PerformanceReviewMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    reviewerId: string | null
    period: $Enums.ReviewPeriod | null
    year: number | null
    rating: number | null
    strengths: string | null
    improvements: string | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerformanceReviewMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    reviewerId: string | null
    period: $Enums.ReviewPeriod | null
    year: number | null
    rating: number | null
    strengths: string | null
    improvements: string | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerformanceReviewCountAggregateOutputType = {
    id: number
    employeeId: number
    reviewerId: number
    period: number
    year: number
    rating: number
    strengths: number
    improvements: number
    comments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PerformanceReviewAvgAggregateInputType = {
    year?: true
    rating?: true
  }

  export type PerformanceReviewSumAggregateInputType = {
    year?: true
    rating?: true
  }

  export type PerformanceReviewMinAggregateInputType = {
    id?: true
    employeeId?: true
    reviewerId?: true
    period?: true
    year?: true
    rating?: true
    strengths?: true
    improvements?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerformanceReviewMaxAggregateInputType = {
    id?: true
    employeeId?: true
    reviewerId?: true
    period?: true
    year?: true
    rating?: true
    strengths?: true
    improvements?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerformanceReviewCountAggregateInputType = {
    id?: true
    employeeId?: true
    reviewerId?: true
    period?: true
    year?: true
    rating?: true
    strengths?: true
    improvements?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PerformanceReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceReview to aggregate.
     */
    where?: PerformanceReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReviews to fetch.
     */
    orderBy?: PerformanceReviewOrderByWithRelationInput | PerformanceReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerformanceReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerformanceReviews
    **/
    _count?: true | PerformanceReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerformanceReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerformanceReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerformanceReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerformanceReviewMaxAggregateInputType
  }

  export type GetPerformanceReviewAggregateType<T extends PerformanceReviewAggregateArgs> = {
        [P in keyof T & keyof AggregatePerformanceReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformanceReview[P]>
      : GetScalarType<T[P], AggregatePerformanceReview[P]>
  }




  export type PerformanceReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceReviewWhereInput
    orderBy?: PerformanceReviewOrderByWithAggregationInput | PerformanceReviewOrderByWithAggregationInput[]
    by: PerformanceReviewScalarFieldEnum[] | PerformanceReviewScalarFieldEnum
    having?: PerformanceReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerformanceReviewCountAggregateInputType | true
    _avg?: PerformanceReviewAvgAggregateInputType
    _sum?: PerformanceReviewSumAggregateInputType
    _min?: PerformanceReviewMinAggregateInputType
    _max?: PerformanceReviewMaxAggregateInputType
  }

  export type PerformanceReviewGroupByOutputType = {
    id: string
    employeeId: string
    reviewerId: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths: string | null
    improvements: string | null
    comments: string
    createdAt: Date
    updatedAt: Date
    _count: PerformanceReviewCountAggregateOutputType | null
    _avg: PerformanceReviewAvgAggregateOutputType | null
    _sum: PerformanceReviewSumAggregateOutputType | null
    _min: PerformanceReviewMinAggregateOutputType | null
    _max: PerformanceReviewMaxAggregateOutputType | null
  }

  type GetPerformanceReviewGroupByPayload<T extends PerformanceReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformanceReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerformanceReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformanceReviewGroupByOutputType[P]>
            : GetScalarType<T[P], PerformanceReviewGroupByOutputType[P]>
        }
      >
    >


  export type PerformanceReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    reviewerId?: boolean
    period?: boolean
    year?: boolean
    rating?: boolean
    strengths?: boolean
    improvements?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewer?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceReview"]>

  export type PerformanceReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    reviewerId?: boolean
    period?: boolean
    year?: boolean
    rating?: boolean
    strengths?: boolean
    improvements?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewer?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceReview"]>

  export type PerformanceReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    reviewerId?: boolean
    period?: boolean
    year?: boolean
    rating?: boolean
    strengths?: boolean
    improvements?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewer?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceReview"]>

  export type PerformanceReviewSelectScalar = {
    id?: boolean
    employeeId?: boolean
    reviewerId?: boolean
    period?: boolean
    year?: boolean
    rating?: boolean
    strengths?: boolean
    improvements?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PerformanceReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "reviewerId" | "period" | "year" | "rating" | "strengths" | "improvements" | "comments" | "createdAt" | "updatedAt", ExtArgs["result"]["performanceReview"]>
  export type PerformanceReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewer?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PerformanceReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewer?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PerformanceReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    reviewer?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PerformanceReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerformanceReview"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      reviewer: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      reviewerId: string
      period: $Enums.ReviewPeriod
      year: number
      rating: number
      strengths: string | null
      improvements: string | null
      comments: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["performanceReview"]>
    composites: {}
  }

  type PerformanceReviewGetPayload<S extends boolean | null | undefined | PerformanceReviewDefaultArgs> = $Result.GetResult<Prisma.$PerformanceReviewPayload, S>

  type PerformanceReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerformanceReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerformanceReviewCountAggregateInputType | true
    }

  export interface PerformanceReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerformanceReview'], meta: { name: 'PerformanceReview' } }
    /**
     * Find zero or one PerformanceReview that matches the filter.
     * @param {PerformanceReviewFindUniqueArgs} args - Arguments to find a PerformanceReview
     * @example
     * // Get one PerformanceReview
     * const performanceReview = await prisma.performanceReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformanceReviewFindUniqueArgs>(args: SelectSubset<T, PerformanceReviewFindUniqueArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PerformanceReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerformanceReviewFindUniqueOrThrowArgs} args - Arguments to find a PerformanceReview
     * @example
     * // Get one PerformanceReview
     * const performanceReview = await prisma.performanceReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformanceReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, PerformanceReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerformanceReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReviewFindFirstArgs} args - Arguments to find a PerformanceReview
     * @example
     * // Get one PerformanceReview
     * const performanceReview = await prisma.performanceReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformanceReviewFindFirstArgs>(args?: SelectSubset<T, PerformanceReviewFindFirstArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerformanceReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReviewFindFirstOrThrowArgs} args - Arguments to find a PerformanceReview
     * @example
     * // Get one PerformanceReview
     * const performanceReview = await prisma.performanceReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformanceReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, PerformanceReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PerformanceReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerformanceReviews
     * const performanceReviews = await prisma.performanceReview.findMany()
     * 
     * // Get first 10 PerformanceReviews
     * const performanceReviews = await prisma.performanceReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const performanceReviewWithIdOnly = await prisma.performanceReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerformanceReviewFindManyArgs>(args?: SelectSubset<T, PerformanceReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PerformanceReview.
     * @param {PerformanceReviewCreateArgs} args - Arguments to create a PerformanceReview.
     * @example
     * // Create one PerformanceReview
     * const PerformanceReview = await prisma.performanceReview.create({
     *   data: {
     *     // ... data to create a PerformanceReview
     *   }
     * })
     * 
     */
    create<T extends PerformanceReviewCreateArgs>(args: SelectSubset<T, PerformanceReviewCreateArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PerformanceReviews.
     * @param {PerformanceReviewCreateManyArgs} args - Arguments to create many PerformanceReviews.
     * @example
     * // Create many PerformanceReviews
     * const performanceReview = await prisma.performanceReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerformanceReviewCreateManyArgs>(args?: SelectSubset<T, PerformanceReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PerformanceReviews and returns the data saved in the database.
     * @param {PerformanceReviewCreateManyAndReturnArgs} args - Arguments to create many PerformanceReviews.
     * @example
     * // Create many PerformanceReviews
     * const performanceReview = await prisma.performanceReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PerformanceReviews and only return the `id`
     * const performanceReviewWithIdOnly = await prisma.performanceReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerformanceReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, PerformanceReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PerformanceReview.
     * @param {PerformanceReviewDeleteArgs} args - Arguments to delete one PerformanceReview.
     * @example
     * // Delete one PerformanceReview
     * const PerformanceReview = await prisma.performanceReview.delete({
     *   where: {
     *     // ... filter to delete one PerformanceReview
     *   }
     * })
     * 
     */
    delete<T extends PerformanceReviewDeleteArgs>(args: SelectSubset<T, PerformanceReviewDeleteArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PerformanceReview.
     * @param {PerformanceReviewUpdateArgs} args - Arguments to update one PerformanceReview.
     * @example
     * // Update one PerformanceReview
     * const performanceReview = await prisma.performanceReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerformanceReviewUpdateArgs>(args: SelectSubset<T, PerformanceReviewUpdateArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PerformanceReviews.
     * @param {PerformanceReviewDeleteManyArgs} args - Arguments to filter PerformanceReviews to delete.
     * @example
     * // Delete a few PerformanceReviews
     * const { count } = await prisma.performanceReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerformanceReviewDeleteManyArgs>(args?: SelectSubset<T, PerformanceReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerformanceReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerformanceReviews
     * const performanceReview = await prisma.performanceReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerformanceReviewUpdateManyArgs>(args: SelectSubset<T, PerformanceReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerformanceReviews and returns the data updated in the database.
     * @param {PerformanceReviewUpdateManyAndReturnArgs} args - Arguments to update many PerformanceReviews.
     * @example
     * // Update many PerformanceReviews
     * const performanceReview = await prisma.performanceReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PerformanceReviews and only return the `id`
     * const performanceReviewWithIdOnly = await prisma.performanceReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerformanceReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, PerformanceReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PerformanceReview.
     * @param {PerformanceReviewUpsertArgs} args - Arguments to update or create a PerformanceReview.
     * @example
     * // Update or create a PerformanceReview
     * const performanceReview = await prisma.performanceReview.upsert({
     *   create: {
     *     // ... data to create a PerformanceReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerformanceReview we want to update
     *   }
     * })
     */
    upsert<T extends PerformanceReviewUpsertArgs>(args: SelectSubset<T, PerformanceReviewUpsertArgs<ExtArgs>>): Prisma__PerformanceReviewClient<$Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PerformanceReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReviewCountArgs} args - Arguments to filter PerformanceReviews to count.
     * @example
     * // Count the number of PerformanceReviews
     * const count = await prisma.performanceReview.count({
     *   where: {
     *     // ... the filter for the PerformanceReviews we want to count
     *   }
     * })
    **/
    count<T extends PerformanceReviewCountArgs>(
      args?: Subset<T, PerformanceReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformanceReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerformanceReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerformanceReviewAggregateArgs>(args: Subset<T, PerformanceReviewAggregateArgs>): Prisma.PrismaPromise<GetPerformanceReviewAggregateType<T>>

    /**
     * Group by PerformanceReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerformanceReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformanceReviewGroupByArgs['orderBy'] }
        : { orderBy?: PerformanceReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerformanceReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerformanceReview model
   */
  readonly fields: PerformanceReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerformanceReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformanceReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PerformanceReview model
   */
  interface PerformanceReviewFieldRefs {
    readonly id: FieldRef<"PerformanceReview", 'String'>
    readonly employeeId: FieldRef<"PerformanceReview", 'String'>
    readonly reviewerId: FieldRef<"PerformanceReview", 'String'>
    readonly period: FieldRef<"PerformanceReview", 'ReviewPeriod'>
    readonly year: FieldRef<"PerformanceReview", 'Int'>
    readonly rating: FieldRef<"PerformanceReview", 'Int'>
    readonly strengths: FieldRef<"PerformanceReview", 'String'>
    readonly improvements: FieldRef<"PerformanceReview", 'String'>
    readonly comments: FieldRef<"PerformanceReview", 'String'>
    readonly createdAt: FieldRef<"PerformanceReview", 'DateTime'>
    readonly updatedAt: FieldRef<"PerformanceReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PerformanceReview findUnique
   */
  export type PerformanceReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceReview to fetch.
     */
    where: PerformanceReviewWhereUniqueInput
  }

  /**
   * PerformanceReview findUniqueOrThrow
   */
  export type PerformanceReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceReview to fetch.
     */
    where: PerformanceReviewWhereUniqueInput
  }

  /**
   * PerformanceReview findFirst
   */
  export type PerformanceReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceReview to fetch.
     */
    where?: PerformanceReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReviews to fetch.
     */
    orderBy?: PerformanceReviewOrderByWithRelationInput | PerformanceReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceReviews.
     */
    cursor?: PerformanceReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceReviews.
     */
    distinct?: PerformanceReviewScalarFieldEnum | PerformanceReviewScalarFieldEnum[]
  }

  /**
   * PerformanceReview findFirstOrThrow
   */
  export type PerformanceReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceReview to fetch.
     */
    where?: PerformanceReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReviews to fetch.
     */
    orderBy?: PerformanceReviewOrderByWithRelationInput | PerformanceReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceReviews.
     */
    cursor?: PerformanceReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceReviews.
     */
    distinct?: PerformanceReviewScalarFieldEnum | PerformanceReviewScalarFieldEnum[]
  }

  /**
   * PerformanceReview findMany
   */
  export type PerformanceReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceReviews to fetch.
     */
    where?: PerformanceReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReviews to fetch.
     */
    orderBy?: PerformanceReviewOrderByWithRelationInput | PerformanceReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerformanceReviews.
     */
    cursor?: PerformanceReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceReviews.
     */
    distinct?: PerformanceReviewScalarFieldEnum | PerformanceReviewScalarFieldEnum[]
  }

  /**
   * PerformanceReview create
   */
  export type PerformanceReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a PerformanceReview.
     */
    data: XOR<PerformanceReviewCreateInput, PerformanceReviewUncheckedCreateInput>
  }

  /**
   * PerformanceReview createMany
   */
  export type PerformanceReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerformanceReviews.
     */
    data: PerformanceReviewCreateManyInput | PerformanceReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerformanceReview createManyAndReturn
   */
  export type PerformanceReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * The data used to create many PerformanceReviews.
     */
    data: PerformanceReviewCreateManyInput | PerformanceReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerformanceReview update
   */
  export type PerformanceReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a PerformanceReview.
     */
    data: XOR<PerformanceReviewUpdateInput, PerformanceReviewUncheckedUpdateInput>
    /**
     * Choose, which PerformanceReview to update.
     */
    where: PerformanceReviewWhereUniqueInput
  }

  /**
   * PerformanceReview updateMany
   */
  export type PerformanceReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerformanceReviews.
     */
    data: XOR<PerformanceReviewUpdateManyMutationInput, PerformanceReviewUncheckedUpdateManyInput>
    /**
     * Filter which PerformanceReviews to update
     */
    where?: PerformanceReviewWhereInput
    /**
     * Limit how many PerformanceReviews to update.
     */
    limit?: number
  }

  /**
   * PerformanceReview updateManyAndReturn
   */
  export type PerformanceReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * The data used to update PerformanceReviews.
     */
    data: XOR<PerformanceReviewUpdateManyMutationInput, PerformanceReviewUncheckedUpdateManyInput>
    /**
     * Filter which PerformanceReviews to update
     */
    where?: PerformanceReviewWhereInput
    /**
     * Limit how many PerformanceReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerformanceReview upsert
   */
  export type PerformanceReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the PerformanceReview to update in case it exists.
     */
    where: PerformanceReviewWhereUniqueInput
    /**
     * In case the PerformanceReview found by the `where` argument doesn't exist, create a new PerformanceReview with this data.
     */
    create: XOR<PerformanceReviewCreateInput, PerformanceReviewUncheckedCreateInput>
    /**
     * In case the PerformanceReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformanceReviewUpdateInput, PerformanceReviewUncheckedUpdateInput>
  }

  /**
   * PerformanceReview delete
   */
  export type PerformanceReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
    /**
     * Filter which PerformanceReview to delete.
     */
    where: PerformanceReviewWhereUniqueInput
  }

  /**
   * PerformanceReview deleteMany
   */
  export type PerformanceReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceReviews to delete
     */
    where?: PerformanceReviewWhereInput
    /**
     * Limit how many PerformanceReviews to delete.
     */
    limit?: number
  }

  /**
   * PerformanceReview without action
   */
  export type PerformanceReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReview
     */
    select?: PerformanceReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceReview
     */
    omit?: PerformanceReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    userId: 'userId',
    departmentId: 'departmentId',
    jobTitleId: 'jobTitleId',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const JobTitleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    salaryGrade: 'salaryGrade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobTitleScalarFieldEnum = (typeof JobTitleScalarFieldEnum)[keyof typeof JobTitleScalarFieldEnum]


  export const LeaveRequestScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    leaveType: 'leaveType',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    status: 'status',
    reviewedById: 'reviewedById',
    reviewNote: 'reviewNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaveRequestScalarFieldEnum = (typeof LeaveRequestScalarFieldEnum)[keyof typeof LeaveRequestScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    date: 'date',
    clockIn: 'clockIn',
    clockOut: 'clockOut',
    workHours: 'workHours',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const PerformanceReviewScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    reviewerId: 'reviewerId',
    period: 'period',
    year: 'year',
    rating: 'rating',
    strengths: 'strengths',
    improvements: 'improvements',
    comments: 'comments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PerformanceReviewScalarFieldEnum = (typeof PerformanceReviewScalarFieldEnum)[keyof typeof PerformanceReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'ReviewPeriod'
   */
  export type EnumReviewPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewPeriod'>
    


  /**
   * Reference to a field of type 'ReviewPeriod[]'
   */
  export type ListEnumReviewPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewPeriod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    departmentId?: StringNullableFilter<"Employee"> | string | null
    jobTitleId?: StringNullableFilter<"Employee"> | string | null
    managerId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    jobTitle?: XOR<JobTitleNullableScalarRelationFilter, JobTitleWhereInput> | null
    manager?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    reports?: EmployeeListRelationFilter
    leaveRequests?: LeaveRequestListRelationFilter
    reviewedLeaveRequests?: LeaveRequestListRelationFilter
    attendanceRecords?: AttendanceListRelationFilter
    performanceReviews?: PerformanceReviewListRelationFilter
    givenReviews?: PerformanceReviewListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    jobTitleId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    jobTitle?: JobTitleOrderByWithRelationInput
    manager?: EmployeeOrderByWithRelationInput
    reports?: EmployeeOrderByRelationAggregateInput
    leaveRequests?: LeaveRequestOrderByRelationAggregateInput
    reviewedLeaveRequests?: LeaveRequestOrderByRelationAggregateInput
    attendanceRecords?: AttendanceOrderByRelationAggregateInput
    performanceReviews?: PerformanceReviewOrderByRelationAggregateInput
    givenReviews?: PerformanceReviewOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    departmentId?: StringNullableFilter<"Employee"> | string | null
    jobTitleId?: StringNullableFilter<"Employee"> | string | null
    managerId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    jobTitle?: XOR<JobTitleNullableScalarRelationFilter, JobTitleWhereInput> | null
    manager?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    reports?: EmployeeListRelationFilter
    leaveRequests?: LeaveRequestListRelationFilter
    reviewedLeaveRequests?: LeaveRequestListRelationFilter
    attendanceRecords?: AttendanceListRelationFilter
    performanceReviews?: PerformanceReviewListRelationFilter
    givenReviews?: PerformanceReviewListRelationFilter
  }, "id" | "userId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    jobTitleId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    userId?: StringWithAggregatesFilter<"Employee"> | string
    departmentId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    jobTitleId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    description?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    description?: StringNullableWithAggregatesFilter<"Department"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type JobTitleWhereInput = {
    AND?: JobTitleWhereInput | JobTitleWhereInput[]
    OR?: JobTitleWhereInput[]
    NOT?: JobTitleWhereInput | JobTitleWhereInput[]
    id?: StringFilter<"JobTitle"> | string
    title?: StringFilter<"JobTitle"> | string
    salaryGrade?: StringNullableFilter<"JobTitle"> | string | null
    createdAt?: DateTimeFilter<"JobTitle"> | Date | string
    updatedAt?: DateTimeFilter<"JobTitle"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type JobTitleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    salaryGrade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type JobTitleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: JobTitleWhereInput | JobTitleWhereInput[]
    OR?: JobTitleWhereInput[]
    NOT?: JobTitleWhereInput | JobTitleWhereInput[]
    salaryGrade?: StringNullableFilter<"JobTitle"> | string | null
    createdAt?: DateTimeFilter<"JobTitle"> | Date | string
    updatedAt?: DateTimeFilter<"JobTitle"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "id" | "title">

  export type JobTitleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    salaryGrade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobTitleCountOrderByAggregateInput
    _max?: JobTitleMaxOrderByAggregateInput
    _min?: JobTitleMinOrderByAggregateInput
  }

  export type JobTitleScalarWhereWithAggregatesInput = {
    AND?: JobTitleScalarWhereWithAggregatesInput | JobTitleScalarWhereWithAggregatesInput[]
    OR?: JobTitleScalarWhereWithAggregatesInput[]
    NOT?: JobTitleScalarWhereWithAggregatesInput | JobTitleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobTitle"> | string
    title?: StringWithAggregatesFilter<"JobTitle"> | string
    salaryGrade?: StringNullableWithAggregatesFilter<"JobTitle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobTitle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobTitle"> | Date | string
  }

  export type LeaveRequestWhereInput = {
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    id?: StringFilter<"LeaveRequest"> | string
    employeeId?: StringFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus
    reviewedById?: StringNullableFilter<"LeaveRequest"> | string | null
    reviewNote?: StringNullableFilter<"LeaveRequest"> | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    reviewedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type LeaveRequestOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    reviewedBy?: EmployeeOrderByWithRelationInput
  }

  export type LeaveRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    employeeId?: StringFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus
    reviewedById?: StringNullableFilter<"LeaveRequest"> | string | null
    reviewNote?: StringNullableFilter<"LeaveRequest"> | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    reviewedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type LeaveRequestOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaveRequestCountOrderByAggregateInput
    _max?: LeaveRequestMaxOrderByAggregateInput
    _min?: LeaveRequestMinOrderByAggregateInput
  }

  export type LeaveRequestScalarWhereWithAggregatesInput = {
    AND?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    OR?: LeaveRequestScalarWhereWithAggregatesInput[]
    NOT?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaveRequest"> | string
    employeeId?: StringWithAggregatesFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeWithAggregatesFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusWithAggregatesFilter<"LeaveRequest"> | $Enums.LeaveStatus
    reviewedById?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    reviewNote?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    employeeId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    clockIn?: DateTimeFilter<"Attendance"> | Date | string
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    workHours?: FloatNullableFilter<"Attendance"> | number | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrderInput | SortOrder
    workHours?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_date?: AttendanceEmployeeIdDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    employeeId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    clockIn?: DateTimeFilter<"Attendance"> | Date | string
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    workHours?: FloatNullableFilter<"Attendance"> | number | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "employeeId_date">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrderInput | SortOrder
    workHours?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    employeeId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    clockIn?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    clockOut?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    workHours?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type PerformanceReviewWhereInput = {
    AND?: PerformanceReviewWhereInput | PerformanceReviewWhereInput[]
    OR?: PerformanceReviewWhereInput[]
    NOT?: PerformanceReviewWhereInput | PerformanceReviewWhereInput[]
    id?: StringFilter<"PerformanceReview"> | string
    employeeId?: StringFilter<"PerformanceReview"> | string
    reviewerId?: StringFilter<"PerformanceReview"> | string
    period?: EnumReviewPeriodFilter<"PerformanceReview"> | $Enums.ReviewPeriod
    year?: IntFilter<"PerformanceReview"> | number
    rating?: IntFilter<"PerformanceReview"> | number
    strengths?: StringNullableFilter<"PerformanceReview"> | string | null
    improvements?: StringNullableFilter<"PerformanceReview"> | string | null
    comments?: StringFilter<"PerformanceReview"> | string
    createdAt?: DateTimeFilter<"PerformanceReview"> | Date | string
    updatedAt?: DateTimeFilter<"PerformanceReview"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    reviewer?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type PerformanceReviewOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    reviewerId?: SortOrder
    period?: SortOrder
    year?: SortOrder
    rating?: SortOrder
    strengths?: SortOrderInput | SortOrder
    improvements?: SortOrderInput | SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    reviewer?: EmployeeOrderByWithRelationInput
  }

  export type PerformanceReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_period_year?: PerformanceReviewEmployeeIdPeriodYearCompoundUniqueInput
    AND?: PerformanceReviewWhereInput | PerformanceReviewWhereInput[]
    OR?: PerformanceReviewWhereInput[]
    NOT?: PerformanceReviewWhereInput | PerformanceReviewWhereInput[]
    employeeId?: StringFilter<"PerformanceReview"> | string
    reviewerId?: StringFilter<"PerformanceReview"> | string
    period?: EnumReviewPeriodFilter<"PerformanceReview"> | $Enums.ReviewPeriod
    year?: IntFilter<"PerformanceReview"> | number
    rating?: IntFilter<"PerformanceReview"> | number
    strengths?: StringNullableFilter<"PerformanceReview"> | string | null
    improvements?: StringNullableFilter<"PerformanceReview"> | string | null
    comments?: StringFilter<"PerformanceReview"> | string
    createdAt?: DateTimeFilter<"PerformanceReview"> | Date | string
    updatedAt?: DateTimeFilter<"PerformanceReview"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    reviewer?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "employeeId_period_year">

  export type PerformanceReviewOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    reviewerId?: SortOrder
    period?: SortOrder
    year?: SortOrder
    rating?: SortOrder
    strengths?: SortOrderInput | SortOrder
    improvements?: SortOrderInput | SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PerformanceReviewCountOrderByAggregateInput
    _avg?: PerformanceReviewAvgOrderByAggregateInput
    _max?: PerformanceReviewMaxOrderByAggregateInput
    _min?: PerformanceReviewMinOrderByAggregateInput
    _sum?: PerformanceReviewSumOrderByAggregateInput
  }

  export type PerformanceReviewScalarWhereWithAggregatesInput = {
    AND?: PerformanceReviewScalarWhereWithAggregatesInput | PerformanceReviewScalarWhereWithAggregatesInput[]
    OR?: PerformanceReviewScalarWhereWithAggregatesInput[]
    NOT?: PerformanceReviewScalarWhereWithAggregatesInput | PerformanceReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PerformanceReview"> | string
    employeeId?: StringWithAggregatesFilter<"PerformanceReview"> | string
    reviewerId?: StringWithAggregatesFilter<"PerformanceReview"> | string
    period?: EnumReviewPeriodWithAggregatesFilter<"PerformanceReview"> | $Enums.ReviewPeriod
    year?: IntWithAggregatesFilter<"PerformanceReview"> | number
    rating?: IntWithAggregatesFilter<"PerformanceReview"> | number
    strengths?: StringNullableWithAggregatesFilter<"PerformanceReview"> | string | null
    improvements?: StringNullableWithAggregatesFilter<"PerformanceReview"> | string | null
    comments?: StringWithAggregatesFilter<"PerformanceReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PerformanceReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PerformanceReview"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleCreateInput = {
    id?: string
    title: string
    salaryGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleUncheckedCreateInput = {
    id?: string
    title: string
    salaryGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    salaryGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutJobTitleNestedInput
  }

  export type JobTitleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    salaryGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutJobTitleNestedInput
  }

  export type JobTitleCreateManyInput = {
    id?: string
    title: string
    salaryGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobTitleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    salaryGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    salaryGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutLeaveRequestsInput
    reviewedBy?: EmployeeCreateNestedOneWithoutReviewedLeaveRequestsInput
  }

  export type LeaveRequestUncheckedCreateInput = {
    id?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewedById?: string | null
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutLeaveRequestsNestedInput
    reviewedBy?: EmployeeUpdateOneWithoutReviewedLeaveRequestsNestedInput
  }

  export type LeaveRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateManyInput = {
    id?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewedById?: string | null
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockOut?: Date | string | null
    workHours?: number | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    employeeId: string
    date: Date | string
    clockIn: Date | string
    clockOut?: Date | string | null
    workHours?: number | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    employeeId: string
    date: Date | string
    clockIn: Date | string
    clockOut?: Date | string | null
    workHours?: number | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReviewCreateInput = {
    id?: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPerformanceReviewsInput
    reviewer: EmployeeCreateNestedOneWithoutGivenReviewsInput
  }

  export type PerformanceReviewUncheckedCreateInput = {
    id?: string
    employeeId: string
    reviewerId: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPerformanceReviewsNestedInput
    reviewer?: EmployeeUpdateOneRequiredWithoutGivenReviewsNestedInput
  }

  export type PerformanceReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReviewCreateManyInput = {
    id?: string
    employeeId: string
    reviewerId: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type JobTitleNullableScalarRelationFilter = {
    is?: JobTitleWhereInput | null
    isNot?: JobTitleWhereInput | null
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type LeaveRequestListRelationFilter = {
    every?: LeaveRequestWhereInput
    some?: LeaveRequestWhereInput
    none?: LeaveRequestWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type PerformanceReviewListRelationFilter = {
    every?: PerformanceReviewWhereInput
    some?: PerformanceReviewWhereInput
    none?: PerformanceReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerformanceReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    jobTitleId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    jobTitleId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    jobTitleId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobTitleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    salaryGrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobTitleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    salaryGrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobTitleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    salaryGrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type LeaveRequestCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type AttendanceEmployeeIdDateCompoundUniqueInput = {
    employeeId: string
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    workHours?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    workHours?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    workHours?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    workHours?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    workHours?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type EnumReviewPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewPeriod | EnumReviewPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewPeriodFilter<$PrismaModel> | $Enums.ReviewPeriod
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PerformanceReviewEmployeeIdPeriodYearCompoundUniqueInput = {
    employeeId: string
    period: $Enums.ReviewPeriod
    year: number
  }

  export type PerformanceReviewCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    reviewerId?: SortOrder
    period?: SortOrder
    year?: SortOrder
    rating?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerformanceReviewAvgOrderByAggregateInput = {
    year?: SortOrder
    rating?: SortOrder
  }

  export type PerformanceReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    reviewerId?: SortOrder
    period?: SortOrder
    year?: SortOrder
    rating?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerformanceReviewMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    reviewerId?: SortOrder
    period?: SortOrder
    year?: SortOrder
    rating?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerformanceReviewSumOrderByAggregateInput = {
    year?: SortOrder
    rating?: SortOrder
  }

  export type EnumReviewPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewPeriod | EnumReviewPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewPeriodWithAggregatesFilter<$PrismaModel> | $Enums.ReviewPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewPeriodFilter<$PrismaModel>
    _max?: NestedEnumReviewPeriodFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type JobTitleCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<JobTitleCreateWithoutEmployeesInput, JobTitleUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutEmployeesInput
    connect?: JobTitleWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutReportsInput = {
    create?: XOR<EmployeeCreateWithoutReportsInput, EmployeeUncheckedCreateWithoutReportsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReportsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutManagerInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type LeaveRequestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<LeaveRequestCreateWithoutReviewedByInput, LeaveRequestUncheckedCreateWithoutReviewedByInput> | LeaveRequestCreateWithoutReviewedByInput[] | LeaveRequestUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutReviewedByInput | LeaveRequestCreateOrConnectWithoutReviewedByInput[]
    createMany?: LeaveRequestCreateManyReviewedByInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type PerformanceReviewCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PerformanceReviewCreateWithoutEmployeeInput, PerformanceReviewUncheckedCreateWithoutEmployeeInput> | PerformanceReviewCreateWithoutEmployeeInput[] | PerformanceReviewUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutEmployeeInput | PerformanceReviewCreateOrConnectWithoutEmployeeInput[]
    createMany?: PerformanceReviewCreateManyEmployeeInputEnvelope
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
  }

  export type PerformanceReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<PerformanceReviewCreateWithoutReviewerInput, PerformanceReviewUncheckedCreateWithoutReviewerInput> | PerformanceReviewCreateWithoutReviewerInput[] | PerformanceReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutReviewerInput | PerformanceReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: PerformanceReviewCreateManyReviewerInputEnvelope
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<LeaveRequestCreateWithoutReviewedByInput, LeaveRequestUncheckedCreateWithoutReviewedByInput> | LeaveRequestCreateWithoutReviewedByInput[] | LeaveRequestUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutReviewedByInput | LeaveRequestCreateOrConnectWithoutReviewedByInput[]
    createMany?: LeaveRequestCreateManyReviewedByInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PerformanceReviewCreateWithoutEmployeeInput, PerformanceReviewUncheckedCreateWithoutEmployeeInput> | PerformanceReviewCreateWithoutEmployeeInput[] | PerformanceReviewUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutEmployeeInput | PerformanceReviewCreateOrConnectWithoutEmployeeInput[]
    createMany?: PerformanceReviewCreateManyEmployeeInputEnvelope
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
  }

  export type PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<PerformanceReviewCreateWithoutReviewerInput, PerformanceReviewUncheckedCreateWithoutReviewerInput> | PerformanceReviewCreateWithoutReviewerInput[] | PerformanceReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutReviewerInput | PerformanceReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: PerformanceReviewCreateManyReviewerInputEnvelope
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type DepartmentUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    upsert?: DepartmentUpsertWithoutEmployeesInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeesInput, DepartmentUpdateWithoutEmployeesInput>, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type JobTitleUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<JobTitleCreateWithoutEmployeesInput, JobTitleUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutEmployeesInput
    upsert?: JobTitleUpsertWithoutEmployeesInput
    disconnect?: JobTitleWhereInput | boolean
    delete?: JobTitleWhereInput | boolean
    connect?: JobTitleWhereUniqueInput
    update?: XOR<XOR<JobTitleUpdateToOneWithWhereWithoutEmployeesInput, JobTitleUpdateWithoutEmployeesInput>, JobTitleUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeUpdateOneWithoutReportsNestedInput = {
    create?: XOR<EmployeeCreateWithoutReportsInput, EmployeeUncheckedCreateWithoutReportsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReportsInput
    upsert?: EmployeeUpsertWithoutReportsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutReportsInput, EmployeeUpdateWithoutReportsInput>, EmployeeUncheckedUpdateWithoutReportsInput>
  }

  export type EmployeeUpdateManyWithoutManagerNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutManagerInput | EmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutManagerInput | EmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutManagerInput | EmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type LeaveRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutEmployeeInput | LeaveRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutReviewedByInput, LeaveRequestUncheckedCreateWithoutReviewedByInput> | LeaveRequestCreateWithoutReviewedByInput[] | LeaveRequestUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutReviewedByInput | LeaveRequestCreateOrConnectWithoutReviewedByInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutReviewedByInput | LeaveRequestUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: LeaveRequestCreateManyReviewedByInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutReviewedByInput | LeaveRequestUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutReviewedByInput | LeaveRequestUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type PerformanceReviewUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PerformanceReviewCreateWithoutEmployeeInput, PerformanceReviewUncheckedCreateWithoutEmployeeInput> | PerformanceReviewCreateWithoutEmployeeInput[] | PerformanceReviewUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutEmployeeInput | PerformanceReviewCreateOrConnectWithoutEmployeeInput[]
    upsert?: PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput | PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PerformanceReviewCreateManyEmployeeInputEnvelope
    set?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    disconnect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    delete?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    update?: PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput | PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput | PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PerformanceReviewScalarWhereInput | PerformanceReviewScalarWhereInput[]
  }

  export type PerformanceReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<PerformanceReviewCreateWithoutReviewerInput, PerformanceReviewUncheckedCreateWithoutReviewerInput> | PerformanceReviewCreateWithoutReviewerInput[] | PerformanceReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutReviewerInput | PerformanceReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: PerformanceReviewUpsertWithWhereUniqueWithoutReviewerInput | PerformanceReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: PerformanceReviewCreateManyReviewerInputEnvelope
    set?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    disconnect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    delete?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    update?: PerformanceReviewUpdateWithWhereUniqueWithoutReviewerInput | PerformanceReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: PerformanceReviewUpdateManyWithWhereWithoutReviewerInput | PerformanceReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: PerformanceReviewScalarWhereInput | PerformanceReviewScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmployeeUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutManagerInput | EmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutManagerInput | EmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutManagerInput | EmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutEmployeeInput | LeaveRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutReviewedByInput, LeaveRequestUncheckedCreateWithoutReviewedByInput> | LeaveRequestCreateWithoutReviewedByInput[] | LeaveRequestUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutReviewedByInput | LeaveRequestCreateOrConnectWithoutReviewedByInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutReviewedByInput | LeaveRequestUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: LeaveRequestCreateManyReviewedByInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutReviewedByInput | LeaveRequestUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutReviewedByInput | LeaveRequestUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PerformanceReviewCreateWithoutEmployeeInput, PerformanceReviewUncheckedCreateWithoutEmployeeInput> | PerformanceReviewCreateWithoutEmployeeInput[] | PerformanceReviewUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutEmployeeInput | PerformanceReviewCreateOrConnectWithoutEmployeeInput[]
    upsert?: PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput | PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PerformanceReviewCreateManyEmployeeInputEnvelope
    set?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    disconnect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    delete?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    update?: PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput | PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput | PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PerformanceReviewScalarWhereInput | PerformanceReviewScalarWhereInput[]
  }

  export type PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<PerformanceReviewCreateWithoutReviewerInput, PerformanceReviewUncheckedCreateWithoutReviewerInput> | PerformanceReviewCreateWithoutReviewerInput[] | PerformanceReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PerformanceReviewCreateOrConnectWithoutReviewerInput | PerformanceReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: PerformanceReviewUpsertWithWhereUniqueWithoutReviewerInput | PerformanceReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: PerformanceReviewCreateManyReviewerInputEnvelope
    set?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    disconnect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    delete?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    connect?: PerformanceReviewWhereUniqueInput | PerformanceReviewWhereUniqueInput[]
    update?: PerformanceReviewUpdateWithWhereUniqueWithoutReviewerInput | PerformanceReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: PerformanceReviewUpdateManyWithWhereWithoutReviewerInput | PerformanceReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: PerformanceReviewScalarWhereInput | PerformanceReviewScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutJobTitleInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleInput, EmployeeUncheckedCreateWithoutJobTitleInput> | EmployeeCreateWithoutJobTitleInput[] | EmployeeUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleInput | EmployeeCreateOrConnectWithoutJobTitleInput[]
    createMany?: EmployeeCreateManyJobTitleInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutJobTitleInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleInput, EmployeeUncheckedCreateWithoutJobTitleInput> | EmployeeCreateWithoutJobTitleInput[] | EmployeeUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleInput | EmployeeCreateOrConnectWithoutJobTitleInput[]
    createMany?: EmployeeCreateManyJobTitleInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutJobTitleNestedInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleInput, EmployeeUncheckedCreateWithoutJobTitleInput> | EmployeeCreateWithoutJobTitleInput[] | EmployeeUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleInput | EmployeeCreateOrConnectWithoutJobTitleInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutJobTitleInput | EmployeeUpsertWithWhereUniqueWithoutJobTitleInput[]
    createMany?: EmployeeCreateManyJobTitleInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutJobTitleInput | EmployeeUpdateWithWhereUniqueWithoutJobTitleInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutJobTitleInput | EmployeeUpdateManyWithWhereWithoutJobTitleInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutJobTitleNestedInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleInput, EmployeeUncheckedCreateWithoutJobTitleInput> | EmployeeCreateWithoutJobTitleInput[] | EmployeeUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleInput | EmployeeCreateOrConnectWithoutJobTitleInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutJobTitleInput | EmployeeUpsertWithWhereUniqueWithoutJobTitleInput[]
    createMany?: EmployeeCreateManyJobTitleInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutJobTitleInput | EmployeeUpdateWithWhereUniqueWithoutJobTitleInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutJobTitleInput | EmployeeUpdateManyWithWhereWithoutJobTitleInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutLeaveRequestsInput = {
    create?: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeaveRequestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutReviewedLeaveRequestsInput = {
    create?: XOR<EmployeeCreateWithoutReviewedLeaveRequestsInput, EmployeeUncheckedCreateWithoutReviewedLeaveRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReviewedLeaveRequestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type EmployeeUpdateOneRequiredWithoutLeaveRequestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeaveRequestsInput
    upsert?: EmployeeUpsertWithoutLeaveRequestsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLeaveRequestsInput, EmployeeUpdateWithoutLeaveRequestsInput>, EmployeeUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type EmployeeUpdateOneWithoutReviewedLeaveRequestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutReviewedLeaveRequestsInput, EmployeeUncheckedCreateWithoutReviewedLeaveRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReviewedLeaveRequestsInput
    upsert?: EmployeeUpsertWithoutReviewedLeaveRequestsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutReviewedLeaveRequestsInput, EmployeeUpdateWithoutReviewedLeaveRequestsInput>, EmployeeUncheckedUpdateWithoutReviewedLeaveRequestsInput>
  }

  export type EmployeeCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendanceRecordsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type EmployeeUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: EmployeeUpsertWithoutAttendanceRecordsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAttendanceRecordsInput, EmployeeUpdateWithoutAttendanceRecordsInput>, EmployeeUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type EmployeeCreateNestedOneWithoutPerformanceReviewsInput = {
    create?: XOR<EmployeeCreateWithoutPerformanceReviewsInput, EmployeeUncheckedCreateWithoutPerformanceReviewsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPerformanceReviewsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutGivenReviewsInput = {
    create?: XOR<EmployeeCreateWithoutGivenReviewsInput, EmployeeUncheckedCreateWithoutGivenReviewsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutGivenReviewsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumReviewPeriodFieldUpdateOperationsInput = {
    set?: $Enums.ReviewPeriod
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateOneRequiredWithoutPerformanceReviewsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPerformanceReviewsInput, EmployeeUncheckedCreateWithoutPerformanceReviewsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPerformanceReviewsInput
    upsert?: EmployeeUpsertWithoutPerformanceReviewsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPerformanceReviewsInput, EmployeeUpdateWithoutPerformanceReviewsInput>, EmployeeUncheckedUpdateWithoutPerformanceReviewsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutGivenReviewsNestedInput = {
    create?: XOR<EmployeeCreateWithoutGivenReviewsInput, EmployeeUncheckedCreateWithoutGivenReviewsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutGivenReviewsInput
    upsert?: EmployeeUpsertWithoutGivenReviewsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutGivenReviewsInput, EmployeeUpdateWithoutGivenReviewsInput>, EmployeeUncheckedUpdateWithoutGivenReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedEnumReviewPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewPeriod | EnumReviewPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewPeriodFilter<$PrismaModel> | $Enums.ReviewPeriod
  }

  export type NestedEnumReviewPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewPeriod | EnumReviewPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewPeriod[] | ListEnumReviewPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewPeriodWithAggregatesFilter<$PrismaModel> | $Enums.ReviewPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewPeriodFilter<$PrismaModel>
    _max?: NestedEnumReviewPeriodFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type DepartmentCreateWithoutEmployeesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutEmployeesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
  }

  export type JobTitleCreateWithoutEmployeesInput = {
    id?: string
    title: string
    salaryGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobTitleUncheckedCreateWithoutEmployeesInput = {
    id?: string
    title: string
    salaryGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobTitleCreateOrConnectWithoutEmployeesInput = {
    where: JobTitleWhereUniqueInput
    create: XOR<JobTitleCreateWithoutEmployeesInput, JobTitleUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeCreateWithoutReportsInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutReportsInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutReportsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutReportsInput, EmployeeUncheckedCreateWithoutReportsInput>
  }

  export type EmployeeCreateWithoutManagerInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutManagerInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput>
  }

  export type EmployeeCreateManyManagerInputEnvelope = {
    data: EmployeeCreateManyManagerInput | EmployeeCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type LeaveRequestCreateWithoutEmployeeInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedBy?: EmployeeCreateNestedOneWithoutReviewedLeaveRequestsInput
  }

  export type LeaveRequestUncheckedCreateWithoutEmployeeInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewedById?: string | null
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestCreateOrConnectWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveRequestCreateManyEmployeeInputEnvelope = {
    data: LeaveRequestCreateManyEmployeeInput | LeaveRequestCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveRequestCreateWithoutReviewedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutLeaveRequestsInput
  }

  export type LeaveRequestUncheckedCreateWithoutReviewedByInput = {
    id?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestCreateOrConnectWithoutReviewedByInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutReviewedByInput, LeaveRequestUncheckedCreateWithoutReviewedByInput>
  }

  export type LeaveRequestCreateManyReviewedByInputEnvelope = {
    data: LeaveRequestCreateManyReviewedByInput | LeaveRequestCreateManyReviewedByInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutEmployeeInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockOut?: Date | string | null
    workHours?: number | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateWithoutEmployeeInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockOut?: Date | string | null
    workHours?: number | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceCreateManyEmployeeInputEnvelope = {
    data: AttendanceCreateManyEmployeeInput | AttendanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PerformanceReviewCreateWithoutEmployeeInput = {
    id?: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: EmployeeCreateNestedOneWithoutGivenReviewsInput
  }

  export type PerformanceReviewUncheckedCreateWithoutEmployeeInput = {
    id?: string
    reviewerId: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceReviewCreateOrConnectWithoutEmployeeInput = {
    where: PerformanceReviewWhereUniqueInput
    create: XOR<PerformanceReviewCreateWithoutEmployeeInput, PerformanceReviewUncheckedCreateWithoutEmployeeInput>
  }

  export type PerformanceReviewCreateManyEmployeeInputEnvelope = {
    data: PerformanceReviewCreateManyEmployeeInput | PerformanceReviewCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PerformanceReviewCreateWithoutReviewerInput = {
    id?: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPerformanceReviewsInput
  }

  export type PerformanceReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    employeeId: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceReviewCreateOrConnectWithoutReviewerInput = {
    where: PerformanceReviewWhereUniqueInput
    create: XOR<PerformanceReviewCreateWithoutReviewerInput, PerformanceReviewUncheckedCreateWithoutReviewerInput>
  }

  export type PerformanceReviewCreateManyReviewerInputEnvelope = {
    data: PerformanceReviewCreateManyReviewerInput | PerformanceReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpsertWithoutEmployeesInput = {
    update: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleUpsertWithoutEmployeesInput = {
    update: XOR<JobTitleUpdateWithoutEmployeesInput, JobTitleUncheckedUpdateWithoutEmployeesInput>
    create: XOR<JobTitleCreateWithoutEmployeesInput, JobTitleUncheckedCreateWithoutEmployeesInput>
    where?: JobTitleWhereInput
  }

  export type JobTitleUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: JobTitleWhereInput
    data: XOR<JobTitleUpdateWithoutEmployeesInput, JobTitleUncheckedUpdateWithoutEmployeesInput>
  }

  export type JobTitleUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    salaryGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    salaryGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutReportsInput = {
    update: XOR<EmployeeUpdateWithoutReportsInput, EmployeeUncheckedUpdateWithoutReportsInput>
    create: XOR<EmployeeCreateWithoutReportsInput, EmployeeUncheckedCreateWithoutReportsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutReportsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutReportsInput, EmployeeUncheckedUpdateWithoutReportsInput>
  }

  export type EmployeeUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutManagerInput, EmployeeUncheckedUpdateWithoutManagerInput>
    create: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutManagerInput, EmployeeUncheckedUpdateWithoutManagerInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutManagerInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutManagerInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    departmentId?: StringNullableFilter<"Employee"> | string | null
    jobTitleId?: StringNullableFilter<"Employee"> | string | null
    managerId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutEmployeeInput, LeaveRequestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutEmployeeInput, LeaveRequestUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type LeaveRequestScalarWhereInput = {
    AND?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    OR?: LeaveRequestScalarWhereInput[]
    NOT?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    id?: StringFilter<"LeaveRequest"> | string
    employeeId?: StringFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus
    reviewedById?: StringNullableFilter<"LeaveRequest"> | string | null
    reviewNote?: StringNullableFilter<"LeaveRequest"> | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutReviewedByInput, LeaveRequestUncheckedUpdateWithoutReviewedByInput>
    create: XOR<LeaveRequestCreateWithoutReviewedByInput, LeaveRequestUncheckedCreateWithoutReviewedByInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutReviewedByInput, LeaveRequestUncheckedUpdateWithoutReviewedByInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutReviewedByInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutReviewedByInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    employeeId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    clockIn?: DateTimeFilter<"Attendance"> | Date | string
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    workHours?: FloatNullableFilter<"Attendance"> | number | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PerformanceReviewWhereUniqueInput
    update: XOR<PerformanceReviewUpdateWithoutEmployeeInput, PerformanceReviewUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PerformanceReviewCreateWithoutEmployeeInput, PerformanceReviewUncheckedCreateWithoutEmployeeInput>
  }

  export type PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PerformanceReviewWhereUniqueInput
    data: XOR<PerformanceReviewUpdateWithoutEmployeeInput, PerformanceReviewUncheckedUpdateWithoutEmployeeInput>
  }

  export type PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput = {
    where: PerformanceReviewScalarWhereInput
    data: XOR<PerformanceReviewUpdateManyMutationInput, PerformanceReviewUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PerformanceReviewScalarWhereInput = {
    AND?: PerformanceReviewScalarWhereInput | PerformanceReviewScalarWhereInput[]
    OR?: PerformanceReviewScalarWhereInput[]
    NOT?: PerformanceReviewScalarWhereInput | PerformanceReviewScalarWhereInput[]
    id?: StringFilter<"PerformanceReview"> | string
    employeeId?: StringFilter<"PerformanceReview"> | string
    reviewerId?: StringFilter<"PerformanceReview"> | string
    period?: EnumReviewPeriodFilter<"PerformanceReview"> | $Enums.ReviewPeriod
    year?: IntFilter<"PerformanceReview"> | number
    rating?: IntFilter<"PerformanceReview"> | number
    strengths?: StringNullableFilter<"PerformanceReview"> | string | null
    improvements?: StringNullableFilter<"PerformanceReview"> | string | null
    comments?: StringFilter<"PerformanceReview"> | string
    createdAt?: DateTimeFilter<"PerformanceReview"> | Date | string
    updatedAt?: DateTimeFilter<"PerformanceReview"> | Date | string
  }

  export type PerformanceReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: PerformanceReviewWhereUniqueInput
    update: XOR<PerformanceReviewUpdateWithoutReviewerInput, PerformanceReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<PerformanceReviewCreateWithoutReviewerInput, PerformanceReviewUncheckedCreateWithoutReviewerInput>
  }

  export type PerformanceReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: PerformanceReviewWhereUniqueInput
    data: XOR<PerformanceReviewUpdateWithoutReviewerInput, PerformanceReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type PerformanceReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: PerformanceReviewScalarWhereInput
    data: XOR<PerformanceReviewUpdateManyMutationInput, PerformanceReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type EmployeeCreateWithoutJobTitleInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutJobTitleInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutJobTitleInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutJobTitleInput, EmployeeUncheckedCreateWithoutJobTitleInput>
  }

  export type EmployeeCreateManyJobTitleInputEnvelope = {
    data: EmployeeCreateManyJobTitleInput | EmployeeCreateManyJobTitleInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutJobTitleInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutJobTitleInput, EmployeeUncheckedUpdateWithoutJobTitleInput>
    create: XOR<EmployeeCreateWithoutJobTitleInput, EmployeeUncheckedCreateWithoutJobTitleInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutJobTitleInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutJobTitleInput, EmployeeUncheckedUpdateWithoutJobTitleInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutJobTitleInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutJobTitleInput>
  }

  export type EmployeeCreateWithoutLeaveRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutLeaveRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutLeaveRequestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
  }

  export type EmployeeCreateWithoutReviewedLeaveRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutReviewedLeaveRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutReviewedLeaveRequestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutReviewedLeaveRequestsInput, EmployeeUncheckedCreateWithoutReviewedLeaveRequestsInput>
  }

  export type EmployeeUpsertWithoutLeaveRequestsInput = {
    update: XOR<EmployeeUpdateWithoutLeaveRequestsInput, EmployeeUncheckedUpdateWithoutLeaveRequestsInput>
    create: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLeaveRequestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLeaveRequestsInput, EmployeeUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type EmployeeUpdateWithoutLeaveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLeaveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUpsertWithoutReviewedLeaveRequestsInput = {
    update: XOR<EmployeeUpdateWithoutReviewedLeaveRequestsInput, EmployeeUncheckedUpdateWithoutReviewedLeaveRequestsInput>
    create: XOR<EmployeeCreateWithoutReviewedLeaveRequestsInput, EmployeeUncheckedCreateWithoutReviewedLeaveRequestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutReviewedLeaveRequestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutReviewedLeaveRequestsInput, EmployeeUncheckedUpdateWithoutReviewedLeaveRequestsInput>
  }

  export type EmployeeUpdateWithoutReviewedLeaveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutReviewedLeaveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeCreateWithoutAttendanceRecordsInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutAttendanceRecordsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type EmployeeUpsertWithoutAttendanceRecordsInput = {
    update: XOR<EmployeeUpdateWithoutAttendanceRecordsInput, EmployeeUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAttendanceRecordsInput, EmployeeUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type EmployeeUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeCreateWithoutPerformanceReviewsInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeUncheckedCreateWithoutPerformanceReviewsInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    givenReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type EmployeeCreateOrConnectWithoutPerformanceReviewsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPerformanceReviewsInput, EmployeeUncheckedCreateWithoutPerformanceReviewsInput>
  }

  export type EmployeeCreateWithoutGivenReviewsInput = {
    id?: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    jobTitle?: JobTitleCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutReportsInput
    reports?: EmployeeCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutGivenReviewsInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    reviewedLeaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutReviewedByInput
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    performanceReviews?: PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutGivenReviewsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutGivenReviewsInput, EmployeeUncheckedCreateWithoutGivenReviewsInput>
  }

  export type EmployeeUpsertWithoutPerformanceReviewsInput = {
    update: XOR<EmployeeUpdateWithoutPerformanceReviewsInput, EmployeeUncheckedUpdateWithoutPerformanceReviewsInput>
    create: XOR<EmployeeCreateWithoutPerformanceReviewsInput, EmployeeUncheckedCreateWithoutPerformanceReviewsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPerformanceReviewsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPerformanceReviewsInput, EmployeeUncheckedUpdateWithoutPerformanceReviewsInput>
  }

  export type EmployeeUpdateWithoutPerformanceReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPerformanceReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUpsertWithoutGivenReviewsInput = {
    update: XOR<EmployeeUpdateWithoutGivenReviewsInput, EmployeeUncheckedUpdateWithoutGivenReviewsInput>
    create: XOR<EmployeeCreateWithoutGivenReviewsInput, EmployeeUncheckedCreateWithoutGivenReviewsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutGivenReviewsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutGivenReviewsInput, EmployeeUncheckedUpdateWithoutGivenReviewsInput>
  }

  export type EmployeeUpdateWithoutGivenReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutGivenReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyManagerInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    jobTitleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestCreateManyEmployeeInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewedById?: string | null
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestCreateManyReviewedByInput = {
    id?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateManyEmployeeInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockOut?: Date | string | null
    workHours?: number | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceReviewCreateManyEmployeeInput = {
    id?: string
    reviewerId: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceReviewCreateManyReviewerInput = {
    id?: string
    employeeId: string
    period: $Enums.ReviewPeriod
    year: number
    rating: number
    strengths?: string | null
    improvements?: string | null
    comments: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedBy?: EmployeeUpdateOneWithoutReviewedLeaveRequestsNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutLeaveRequestsNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReviewUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: EmployeeUpdateOneRequiredWithoutGivenReviewsNestedInput
  }

  export type PerformanceReviewUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReviewUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPerformanceReviewsNestedInput
  }

  export type PerformanceReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    period?: EnumReviewPeriodFieldUpdateOperationsInput | $Enums.ReviewPeriod
    year?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    improvements?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyDepartmentInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    jobTitleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    jobTitle?: JobTitleUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyJobTitleInput = {
    id?: string
    firstName: string
    lastName: string
    userId: string
    departmentId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutReportsNestedInput
    reports?: EmployeeUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    reviewedLeaveRequests?: LeaveRequestUncheckedUpdateManyWithoutReviewedByNestedInput
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    performanceReviews?: PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput
    givenReviews?: PerformanceReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model CampaignStep
 * 
 */
export type CampaignStep = $Result.DefaultSelection<Prisma.$CampaignStepPayload>
/**
 * Model CampaignClient
 * 
 */
export type CampaignClient = $Result.DefaultSelection<Prisma.$CampaignClientPayload>
/**
 * Model EmailEvent
 * 
 */
export type EmailEvent = $Result.DefaultSelection<Prisma.$EmailEventPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PlanType: {
  FREE: 'FREE',
  STARTER: 'STARTER',
  PRO: 'PRO'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const CampaignStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const ClientCampaignStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  FINISHED: 'FINISHED',
  REMOVED: 'REMOVED',
  BOUNCED: 'BOUNCED',
  UNSUBSCRIBED: 'UNSUBSCRIBED'
};

export type ClientCampaignStatus = (typeof ClientCampaignStatus)[keyof typeof ClientCampaignStatus]


export const ThemePreference: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  CONTRAST: 'CONTRAST'
};

export type ThemePreference = (typeof ThemePreference)[keyof typeof ThemePreference]


export const LayoutDensity: {
  COMPACT: 'COMPACT',
  NORMAL: 'NORMAL',
  WIDE: 'WIDE'
};

export type LayoutDensity = (typeof LayoutDensity)[keyof typeof LayoutDensity]


export const EmailEventType: {
  SENT: 'SENT',
  DELIVERED: 'DELIVERED',
  OPENED: 'OPENED',
  CLICKED: 'CLICKED',
  BOUNCED: 'BOUNCED',
  SPAM_COMPLAINT: 'SPAM_COMPLAINT',
  UNSUBSCRIBED: 'UNSUBSCRIBED'
};

export type EmailEventType = (typeof EmailEventType)[keyof typeof EmailEventType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type ClientCampaignStatus = $Enums.ClientCampaignStatus

export const ClientCampaignStatus: typeof $Enums.ClientCampaignStatus

export type ThemePreference = $Enums.ThemePreference

export const ThemePreference: typeof $Enums.ThemePreference

export type LayoutDensity = $Enums.LayoutDensity

export const LayoutDensity: typeof $Enums.LayoutDensity

export type EmailEventType = $Enums.EmailEventType

export const EmailEventType: typeof $Enums.EmailEventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignStep`: Exposes CRUD operations for the **CampaignStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignSteps
    * const campaignSteps = await prisma.campaignStep.findMany()
    * ```
    */
  get campaignStep(): Prisma.CampaignStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignClient`: Exposes CRUD operations for the **CampaignClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignClients
    * const campaignClients = await prisma.campaignClient.findMany()
    * ```
    */
  get campaignClient(): Prisma.CampaignClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailEvent`: Exposes CRUD operations for the **EmailEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailEvents
    * const emailEvents = await prisma.emailEvent.findMany()
    * ```
    */
  get emailEvent(): Prisma.EmailEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Company: 'Company',
    Client: 'Client',
    Template: 'Template',
    Campaign: 'Campaign',
    CampaignStep: 'CampaignStep',
    CampaignClient: 'CampaignClient',
    EmailEvent: 'EmailEvent',
    UserPreference: 'UserPreference'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "company" | "client" | "template" | "campaign" | "campaignStep" | "campaignClient" | "emailEvent" | "userPreference"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      CampaignStep: {
        payload: Prisma.$CampaignStepPayload<ExtArgs>
        fields: Prisma.CampaignStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>
          }
          findFirst: {
            args: Prisma.CampaignStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>
          }
          findMany: {
            args: Prisma.CampaignStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>[]
          }
          create: {
            args: Prisma.CampaignStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>
          }
          createMany: {
            args: Prisma.CampaignStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>[]
          }
          delete: {
            args: Prisma.CampaignStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>
          }
          update: {
            args: Prisma.CampaignStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>
          }
          deleteMany: {
            args: Prisma.CampaignStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>[]
          }
          upsert: {
            args: Prisma.CampaignStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignStepPayload>
          }
          aggregate: {
            args: Prisma.CampaignStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignStep>
          }
          groupBy: {
            args: Prisma.CampaignStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignStepCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignStepCountAggregateOutputType> | number
          }
        }
      }
      CampaignClient: {
        payload: Prisma.$CampaignClientPayload<ExtArgs>
        fields: Prisma.CampaignClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>
          }
          findFirst: {
            args: Prisma.CampaignClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>
          }
          findMany: {
            args: Prisma.CampaignClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>[]
          }
          create: {
            args: Prisma.CampaignClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>
          }
          createMany: {
            args: Prisma.CampaignClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>[]
          }
          delete: {
            args: Prisma.CampaignClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>
          }
          update: {
            args: Prisma.CampaignClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>
          }
          deleteMany: {
            args: Prisma.CampaignClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>[]
          }
          upsert: {
            args: Prisma.CampaignClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignClientPayload>
          }
          aggregate: {
            args: Prisma.CampaignClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignClient>
          }
          groupBy: {
            args: Prisma.CampaignClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignClientCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignClientCountAggregateOutputType> | number
          }
        }
      }
      EmailEvent: {
        payload: Prisma.$EmailEventPayload<ExtArgs>
        fields: Prisma.EmailEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          findFirst: {
            args: Prisma.EmailEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          findMany: {
            args: Prisma.EmailEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>[]
          }
          create: {
            args: Prisma.EmailEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          createMany: {
            args: Prisma.EmailEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>[]
          }
          delete: {
            args: Prisma.EmailEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          update: {
            args: Prisma.EmailEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          deleteMany: {
            args: Prisma.EmailEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>[]
          }
          upsert: {
            args: Prisma.EmailEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          aggregate: {
            args: Prisma.EmailEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailEvent>
          }
          groupBy: {
            args: Prisma.EmailEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailEventCountArgs<ExtArgs>
            result: $Utils.Optional<EmailEventCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    company?: CompanyOmit
    client?: ClientOmit
    template?: TemplateOmit
    campaign?: CampaignOmit
    campaignStep?: CampaignStepOmit
    campaignClient?: CampaignClientOmit
    emailEvent?: EmailEventOmit
    userPreference?: UserPreferenceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    templates: number
    campaigns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    clients: number
    templates: number
    campaigns: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    clients?: boolean | CompanyCountOutputTypeCountClientsArgs
    templates?: boolean | CompanyCountOutputTypeCountTemplatesArgs
    campaigns?: boolean | CompanyCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    campaigns: number
    emailEvents: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | ClientCountOutputTypeCountCampaignsArgs
    emailEvents?: boolean | ClientCountOutputTypeCountEmailEventsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignClientWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountEmailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailEventWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    campaignSteps: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaignSteps?: boolean | TemplateCountOutputTypeCountCampaignStepsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountCampaignStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignStepWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    steps: number
    clients: number
    emailEvents: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | CampaignCountOutputTypeCountStepsArgs
    clients?: boolean | CampaignCountOutputTypeCountClientsArgs
    emailEvents?: boolean | CampaignCountOutputTypeCountEmailEventsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignStepWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignClientWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountEmailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailEventWhereInput
  }


  /**
   * Count Type CampaignStepCountOutputType
   */

  export type CampaignStepCountOutputType = {
    emailEvents: number
  }

  export type CampaignStepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailEvents?: boolean | CampaignStepCountOutputTypeCountEmailEventsArgs
  }

  // Custom InputTypes
  /**
   * CampaignStepCountOutputType without action
   */
  export type CampaignStepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStepCountOutputType
     */
    select?: CampaignStepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignStepCountOutputType without action
   */
  export type CampaignStepCountOutputTypeCountEmailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailEventWhereInput
  }


  /**
   * Count Type CampaignClientCountOutputType
   */

  export type CampaignClientCountOutputType = {
    emailEvents: number
  }

  export type CampaignClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailEvents?: boolean | CampaignClientCountOutputTypeCountEmailEventsArgs
  }

  // Custom InputTypes
  /**
   * CampaignClientCountOutputType without action
   */
  export type CampaignClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClientCountOutputType
     */
    select?: CampaignClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignClientCountOutputType without action
   */
  export type CampaignClientCountOutputTypeCountEmailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    companyId: number | null
  }

  export type UserSumAggregateOutputType = {
    companyId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    companyId: number | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    companyId: number | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    emailVerified: number
    image: number
    passwordHash: number
    companyId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    companyId?: true
  }

  export type UserSumAggregateInputType = {
    companyId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    companyId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    companyId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    companyId?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    companyId: number | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "emailVerified" | "image" | "passwordHash" | "companyId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs> | null
      preferences: Prisma.$UserPreferencePayload<ExtArgs> | null
      templates: Prisma.$TemplatePayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      username: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      passwordHash: string | null
      companyId: number | null
      role: $Enums.UserRole
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'UserRole'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    stripeCustomerId: string | null
    planType: $Enums.PlanType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    stripeCustomerId: string | null
    planType: $Enums.PlanType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    stripeCustomerId: number
    planType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    stripeCustomerId?: true
    planType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    stripeCustomerId?: true
    planType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    stripeCustomerId?: true
    planType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    stripeCustomerId: string | null
    planType: $Enums.PlanType
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    planType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    clients?: boolean | Company$clientsArgs<ExtArgs>
    templates?: boolean | Company$templatesArgs<ExtArgs>
    campaigns?: boolean | Company$campaignsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    planType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    planType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    stripeCustomerId?: boolean
    planType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stripeCustomerId" | "planType" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    clients?: boolean | Company$clientsArgs<ExtArgs>
    templates?: boolean | Company$templatesArgs<ExtArgs>
    campaigns?: boolean | Company$campaignsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      stripeCustomerId: string | null
      planType: $Enums.PlanType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends Company$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Company$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends Company$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Company$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Company$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Company$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly stripeCustomerId: FieldRef<"Company", 'String'>
    readonly planType: FieldRef<"Company", 'PlanType'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.clients
   */
  export type Company$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Company.templates
   */
  export type Company$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Company.campaigns
   */
  export type Company$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    email: string | null
    firstName: string | null
    lastName: string | null
    notes: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    email: string | null
    firstName: string | null
    lastName: string | null
    notes: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    notes: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    notes?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    notes?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    notes?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    email: string
    firstName: string | null
    lastName: string | null
    notes: string | null
    companyId: number
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    notes?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    campaigns?: boolean | Client$campaignsArgs<ExtArgs>
    emailEvents?: boolean | Client$emailEventsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    notes?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    notes?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    notes?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "notes" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    campaigns?: boolean | Client$campaignsArgs<ExtArgs>
    emailEvents?: boolean | Client$emailEventsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      campaigns: Prisma.$CampaignClientPayload<ExtArgs>[]
      emailEvents: Prisma.$EmailEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      firstName: string | null
      lastName: string | null
      notes: string | null
      companyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaigns<T extends Client$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Client$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailEvents<T extends Client$emailEventsArgs<ExtArgs> = {}>(args?: Subset<T, Client$emailEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly email: FieldRef<"Client", 'String'>
    readonly firstName: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly companyId: FieldRef<"Client", 'Int'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.campaigns
   */
  export type Client$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    where?: CampaignClientWhereInput
    orderBy?: CampaignClientOrderByWithRelationInput | CampaignClientOrderByWithRelationInput[]
    cursor?: CampaignClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignClientScalarFieldEnum | CampaignClientScalarFieldEnum[]
  }

  /**
   * Client.emailEvents
   */
  export type Client$emailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    where?: EmailEventWhereInput
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    cursor?: EmailEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    subject: string | null
    bodyHtml: string | null
    companyId: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subject: string | null
    bodyHtml: string | null
    companyId: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    bodyHtml: number
    companyId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    bodyHtml?: true
    companyId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    bodyHtml?: true
    companyId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    bodyHtml?: true
    companyId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    name: string
    subject: string
    bodyHtml: string
    companyId: number
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    bodyHtml?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    campaignSteps?: boolean | Template$campaignStepsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    bodyHtml?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    bodyHtml?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    bodyHtml?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "bodyHtml" | "companyId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
    campaignSteps?: boolean | Template$campaignStepsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Template$createdByArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      campaignSteps: Prisma.$CampaignStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      subject: string
      bodyHtml: string
      companyId: number
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Template$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Template$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    campaignSteps<T extends Template$campaignStepsArgs<ExtArgs> = {}>(args?: Subset<T, Template$campaignStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'Int'>
    readonly name: FieldRef<"Template", 'String'>
    readonly subject: FieldRef<"Template", 'String'>
    readonly bodyHtml: FieldRef<"Template", 'String'>
    readonly companyId: FieldRef<"Template", 'Int'>
    readonly createdById: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.createdBy
   */
  export type Template$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Template.campaignSteps
   */
  export type Template$campaignStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    where?: CampaignStepWhereInput
    orderBy?: CampaignStepOrderByWithRelationInput | CampaignStepOrderByWithRelationInput[]
    cursor?: CampaignStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignStepScalarFieldEnum | CampaignStepScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.CampaignStatus | null
    companyId: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.CampaignStatus | null
    companyId: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    status: number
    companyId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    companyId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    companyId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    companyId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    name: string
    status: $Enums.CampaignStatus
    companyId: number
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Campaign$createdByArgs<ExtArgs>
    steps?: boolean | Campaign$stepsArgs<ExtArgs>
    clients?: boolean | Campaign$clientsArgs<ExtArgs>
    emailEvents?: boolean | Campaign$emailEventsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Campaign$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Campaign$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    companyId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "companyId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Campaign$createdByArgs<ExtArgs>
    steps?: boolean | Campaign$stepsArgs<ExtArgs>
    clients?: boolean | Campaign$clientsArgs<ExtArgs>
    emailEvents?: boolean | Campaign$emailEventsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Campaign$createdByArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    createdBy?: boolean | Campaign$createdByArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      steps: Prisma.$CampaignStepPayload<ExtArgs>[]
      clients: Prisma.$CampaignClientPayload<ExtArgs>[]
      emailEvents: Prisma.$EmailEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.CampaignStatus
      companyId: number
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Campaign$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    steps<T extends Campaign$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends Campaign$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailEvents<T extends Campaign$emailEventsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$emailEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly companyId: FieldRef<"Campaign", 'Int'>
    readonly createdById: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.createdBy
   */
  export type Campaign$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Campaign.steps
   */
  export type Campaign$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    where?: CampaignStepWhereInput
    orderBy?: CampaignStepOrderByWithRelationInput | CampaignStepOrderByWithRelationInput[]
    cursor?: CampaignStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignStepScalarFieldEnum | CampaignStepScalarFieldEnum[]
  }

  /**
   * Campaign.clients
   */
  export type Campaign$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    where?: CampaignClientWhereInput
    orderBy?: CampaignClientOrderByWithRelationInput | CampaignClientOrderByWithRelationInput[]
    cursor?: CampaignClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignClientScalarFieldEnum | CampaignClientScalarFieldEnum[]
  }

  /**
   * Campaign.emailEvents
   */
  export type Campaign$emailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    where?: EmailEventWhereInput
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    cursor?: EmailEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model CampaignStep
   */

  export type AggregateCampaignStep = {
    _count: CampaignStepCountAggregateOutputType | null
    _avg: CampaignStepAvgAggregateOutputType | null
    _sum: CampaignStepSumAggregateOutputType | null
    _min: CampaignStepMinAggregateOutputType | null
    _max: CampaignStepMaxAggregateOutputType | null
  }

  export type CampaignStepAvgAggregateOutputType = {
    id: number | null
    sequenceOrder: number | null
    delayDays: number | null
    templateId: number | null
    campaignId: number | null
  }

  export type CampaignStepSumAggregateOutputType = {
    id: number | null
    sequenceOrder: number | null
    delayDays: number | null
    templateId: number | null
    campaignId: number | null
  }

  export type CampaignStepMinAggregateOutputType = {
    id: number | null
    sequenceOrder: number | null
    delayDays: number | null
    templateId: number | null
    campaignId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    sendDays: string | null
    sendTimeStart: string | null
    sendTimeEnd: string | null
  }

  export type CampaignStepMaxAggregateOutputType = {
    id: number | null
    sequenceOrder: number | null
    delayDays: number | null
    templateId: number | null
    campaignId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    sendDays: string | null
    sendTimeStart: string | null
    sendTimeEnd: string | null
  }

  export type CampaignStepCountAggregateOutputType = {
    id: number
    sequenceOrder: number
    delayDays: number
    templateId: number
    campaignId: number
    createdAt: number
    updatedAt: number
    sendDays: number
    sendTimeStart: number
    sendTimeEnd: number
    _all: number
  }


  export type CampaignStepAvgAggregateInputType = {
    id?: true
    sequenceOrder?: true
    delayDays?: true
    templateId?: true
    campaignId?: true
  }

  export type CampaignStepSumAggregateInputType = {
    id?: true
    sequenceOrder?: true
    delayDays?: true
    templateId?: true
    campaignId?: true
  }

  export type CampaignStepMinAggregateInputType = {
    id?: true
    sequenceOrder?: true
    delayDays?: true
    templateId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
    sendDays?: true
    sendTimeStart?: true
    sendTimeEnd?: true
  }

  export type CampaignStepMaxAggregateInputType = {
    id?: true
    sequenceOrder?: true
    delayDays?: true
    templateId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
    sendDays?: true
    sendTimeStart?: true
    sendTimeEnd?: true
  }

  export type CampaignStepCountAggregateInputType = {
    id?: true
    sequenceOrder?: true
    delayDays?: true
    templateId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
    sendDays?: true
    sendTimeStart?: true
    sendTimeEnd?: true
    _all?: true
  }

  export type CampaignStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignStep to aggregate.
     */
    where?: CampaignStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignSteps to fetch.
     */
    orderBy?: CampaignStepOrderByWithRelationInput | CampaignStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignSteps
    **/
    _count?: true | CampaignStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignStepMaxAggregateInputType
  }

  export type GetCampaignStepAggregateType<T extends CampaignStepAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignStep[P]>
      : GetScalarType<T[P], AggregateCampaignStep[P]>
  }




  export type CampaignStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignStepWhereInput
    orderBy?: CampaignStepOrderByWithAggregationInput | CampaignStepOrderByWithAggregationInput[]
    by: CampaignStepScalarFieldEnum[] | CampaignStepScalarFieldEnum
    having?: CampaignStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignStepCountAggregateInputType | true
    _avg?: CampaignStepAvgAggregateInputType
    _sum?: CampaignStepSumAggregateInputType
    _min?: CampaignStepMinAggregateInputType
    _max?: CampaignStepMaxAggregateInputType
  }

  export type CampaignStepGroupByOutputType = {
    id: number
    sequenceOrder: number
    delayDays: number
    templateId: number
    campaignId: number
    createdAt: Date
    updatedAt: Date
    sendDays: string | null
    sendTimeStart: string | null
    sendTimeEnd: string | null
    _count: CampaignStepCountAggregateOutputType | null
    _avg: CampaignStepAvgAggregateOutputType | null
    _sum: CampaignStepSumAggregateOutputType | null
    _min: CampaignStepMinAggregateOutputType | null
    _max: CampaignStepMaxAggregateOutputType | null
  }

  type GetCampaignStepGroupByPayload<T extends CampaignStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignStepGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignStepGroupByOutputType[P]>
        }
      >
    >


  export type CampaignStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceOrder?: boolean
    delayDays?: boolean
    templateId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sendDays?: boolean
    sendTimeStart?: boolean
    sendTimeEnd?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    emailEvents?: boolean | CampaignStep$emailEventsArgs<ExtArgs>
    _count?: boolean | CampaignStepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignStep"]>

  export type CampaignStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceOrder?: boolean
    delayDays?: boolean
    templateId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sendDays?: boolean
    sendTimeStart?: boolean
    sendTimeEnd?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignStep"]>

  export type CampaignStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceOrder?: boolean
    delayDays?: boolean
    templateId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sendDays?: boolean
    sendTimeStart?: boolean
    sendTimeEnd?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignStep"]>

  export type CampaignStepSelectScalar = {
    id?: boolean
    sequenceOrder?: boolean
    delayDays?: boolean
    templateId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sendDays?: boolean
    sendTimeStart?: boolean
    sendTimeEnd?: boolean
  }

  export type CampaignStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sequenceOrder" | "delayDays" | "templateId" | "campaignId" | "createdAt" | "updatedAt" | "sendDays" | "sendTimeStart" | "sendTimeEnd", ExtArgs["result"]["campaignStep"]>
  export type CampaignStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    emailEvents?: boolean | CampaignStep$emailEventsArgs<ExtArgs>
    _count?: boolean | CampaignStepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type CampaignStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $CampaignStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignStep"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
      emailEvents: Prisma.$EmailEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sequenceOrder: number
      delayDays: number
      templateId: number
      campaignId: number
      createdAt: Date
      updatedAt: Date
      sendDays: string | null
      sendTimeStart: string | null
      sendTimeEnd: string | null
    }, ExtArgs["result"]["campaignStep"]>
    composites: {}
  }

  type CampaignStepGetPayload<S extends boolean | null | undefined | CampaignStepDefaultArgs> = $Result.GetResult<Prisma.$CampaignStepPayload, S>

  type CampaignStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignStepCountAggregateInputType | true
    }

  export interface CampaignStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignStep'], meta: { name: 'CampaignStep' } }
    /**
     * Find zero or one CampaignStep that matches the filter.
     * @param {CampaignStepFindUniqueArgs} args - Arguments to find a CampaignStep
     * @example
     * // Get one CampaignStep
     * const campaignStep = await prisma.campaignStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignStepFindUniqueArgs>(args: SelectSubset<T, CampaignStepFindUniqueArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignStepFindUniqueOrThrowArgs} args - Arguments to find a CampaignStep
     * @example
     * // Get one CampaignStep
     * const campaignStep = await prisma.campaignStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignStepFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignStepFindFirstArgs} args - Arguments to find a CampaignStep
     * @example
     * // Get one CampaignStep
     * const campaignStep = await prisma.campaignStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignStepFindFirstArgs>(args?: SelectSubset<T, CampaignStepFindFirstArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignStepFindFirstOrThrowArgs} args - Arguments to find a CampaignStep
     * @example
     * // Get one CampaignStep
     * const campaignStep = await prisma.campaignStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignStepFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignSteps
     * const campaignSteps = await prisma.campaignStep.findMany()
     * 
     * // Get first 10 CampaignSteps
     * const campaignSteps = await prisma.campaignStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignStepWithIdOnly = await prisma.campaignStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignStepFindManyArgs>(args?: SelectSubset<T, CampaignStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignStep.
     * @param {CampaignStepCreateArgs} args - Arguments to create a CampaignStep.
     * @example
     * // Create one CampaignStep
     * const CampaignStep = await prisma.campaignStep.create({
     *   data: {
     *     // ... data to create a CampaignStep
     *   }
     * })
     * 
     */
    create<T extends CampaignStepCreateArgs>(args: SelectSubset<T, CampaignStepCreateArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignSteps.
     * @param {CampaignStepCreateManyArgs} args - Arguments to create many CampaignSteps.
     * @example
     * // Create many CampaignSteps
     * const campaignStep = await prisma.campaignStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignStepCreateManyArgs>(args?: SelectSubset<T, CampaignStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignSteps and returns the data saved in the database.
     * @param {CampaignStepCreateManyAndReturnArgs} args - Arguments to create many CampaignSteps.
     * @example
     * // Create many CampaignSteps
     * const campaignStep = await prisma.campaignStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignSteps and only return the `id`
     * const campaignStepWithIdOnly = await prisma.campaignStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignStepCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignStep.
     * @param {CampaignStepDeleteArgs} args - Arguments to delete one CampaignStep.
     * @example
     * // Delete one CampaignStep
     * const CampaignStep = await prisma.campaignStep.delete({
     *   where: {
     *     // ... filter to delete one CampaignStep
     *   }
     * })
     * 
     */
    delete<T extends CampaignStepDeleteArgs>(args: SelectSubset<T, CampaignStepDeleteArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignStep.
     * @param {CampaignStepUpdateArgs} args - Arguments to update one CampaignStep.
     * @example
     * // Update one CampaignStep
     * const campaignStep = await prisma.campaignStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignStepUpdateArgs>(args: SelectSubset<T, CampaignStepUpdateArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignSteps.
     * @param {CampaignStepDeleteManyArgs} args - Arguments to filter CampaignSteps to delete.
     * @example
     * // Delete a few CampaignSteps
     * const { count } = await prisma.campaignStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignStepDeleteManyArgs>(args?: SelectSubset<T, CampaignStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignSteps
     * const campaignStep = await prisma.campaignStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignStepUpdateManyArgs>(args: SelectSubset<T, CampaignStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignSteps and returns the data updated in the database.
     * @param {CampaignStepUpdateManyAndReturnArgs} args - Arguments to update many CampaignSteps.
     * @example
     * // Update many CampaignSteps
     * const campaignStep = await prisma.campaignStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignSteps and only return the `id`
     * const campaignStepWithIdOnly = await prisma.campaignStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignStepUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignStep.
     * @param {CampaignStepUpsertArgs} args - Arguments to update or create a CampaignStep.
     * @example
     * // Update or create a CampaignStep
     * const campaignStep = await prisma.campaignStep.upsert({
     *   create: {
     *     // ... data to create a CampaignStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignStep we want to update
     *   }
     * })
     */
    upsert<T extends CampaignStepUpsertArgs>(args: SelectSubset<T, CampaignStepUpsertArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignStepCountArgs} args - Arguments to filter CampaignSteps to count.
     * @example
     * // Count the number of CampaignSteps
     * const count = await prisma.campaignStep.count({
     *   where: {
     *     // ... the filter for the CampaignSteps we want to count
     *   }
     * })
    **/
    count<T extends CampaignStepCountArgs>(
      args?: Subset<T, CampaignStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignStepAggregateArgs>(args: Subset<T, CampaignStepAggregateArgs>): Prisma.PrismaPromise<GetCampaignStepAggregateType<T>>

    /**
     * Group by CampaignStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignStepGroupByArgs} args - Group by arguments.
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
      T extends CampaignStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignStepGroupByArgs['orderBy'] }
        : { orderBy?: CampaignStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignStep model
   */
  readonly fields: CampaignStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emailEvents<T extends CampaignStep$emailEventsArgs<ExtArgs> = {}>(args?: Subset<T, CampaignStep$emailEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CampaignStep model
   */
  interface CampaignStepFieldRefs {
    readonly id: FieldRef<"CampaignStep", 'Int'>
    readonly sequenceOrder: FieldRef<"CampaignStep", 'Int'>
    readonly delayDays: FieldRef<"CampaignStep", 'Int'>
    readonly templateId: FieldRef<"CampaignStep", 'Int'>
    readonly campaignId: FieldRef<"CampaignStep", 'Int'>
    readonly createdAt: FieldRef<"CampaignStep", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignStep", 'DateTime'>
    readonly sendDays: FieldRef<"CampaignStep", 'String'>
    readonly sendTimeStart: FieldRef<"CampaignStep", 'String'>
    readonly sendTimeEnd: FieldRef<"CampaignStep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CampaignStep findUnique
   */
  export type CampaignStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * Filter, which CampaignStep to fetch.
     */
    where: CampaignStepWhereUniqueInput
  }

  /**
   * CampaignStep findUniqueOrThrow
   */
  export type CampaignStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * Filter, which CampaignStep to fetch.
     */
    where: CampaignStepWhereUniqueInput
  }

  /**
   * CampaignStep findFirst
   */
  export type CampaignStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * Filter, which CampaignStep to fetch.
     */
    where?: CampaignStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignSteps to fetch.
     */
    orderBy?: CampaignStepOrderByWithRelationInput | CampaignStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignSteps.
     */
    cursor?: CampaignStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignSteps.
     */
    distinct?: CampaignStepScalarFieldEnum | CampaignStepScalarFieldEnum[]
  }

  /**
   * CampaignStep findFirstOrThrow
   */
  export type CampaignStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * Filter, which CampaignStep to fetch.
     */
    where?: CampaignStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignSteps to fetch.
     */
    orderBy?: CampaignStepOrderByWithRelationInput | CampaignStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignSteps.
     */
    cursor?: CampaignStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignSteps.
     */
    distinct?: CampaignStepScalarFieldEnum | CampaignStepScalarFieldEnum[]
  }

  /**
   * CampaignStep findMany
   */
  export type CampaignStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * Filter, which CampaignSteps to fetch.
     */
    where?: CampaignStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignSteps to fetch.
     */
    orderBy?: CampaignStepOrderByWithRelationInput | CampaignStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignSteps.
     */
    cursor?: CampaignStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignSteps.
     */
    skip?: number
    distinct?: CampaignStepScalarFieldEnum | CampaignStepScalarFieldEnum[]
  }

  /**
   * CampaignStep create
   */
  export type CampaignStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignStep.
     */
    data: XOR<CampaignStepCreateInput, CampaignStepUncheckedCreateInput>
  }

  /**
   * CampaignStep createMany
   */
  export type CampaignStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignSteps.
     */
    data: CampaignStepCreateManyInput | CampaignStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignStep createManyAndReturn
   */
  export type CampaignStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignSteps.
     */
    data: CampaignStepCreateManyInput | CampaignStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignStep update
   */
  export type CampaignStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignStep.
     */
    data: XOR<CampaignStepUpdateInput, CampaignStepUncheckedUpdateInput>
    /**
     * Choose, which CampaignStep to update.
     */
    where: CampaignStepWhereUniqueInput
  }

  /**
   * CampaignStep updateMany
   */
  export type CampaignStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignSteps.
     */
    data: XOR<CampaignStepUpdateManyMutationInput, CampaignStepUncheckedUpdateManyInput>
    /**
     * Filter which CampaignSteps to update
     */
    where?: CampaignStepWhereInput
    /**
     * Limit how many CampaignSteps to update.
     */
    limit?: number
  }

  /**
   * CampaignStep updateManyAndReturn
   */
  export type CampaignStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * The data used to update CampaignSteps.
     */
    data: XOR<CampaignStepUpdateManyMutationInput, CampaignStepUncheckedUpdateManyInput>
    /**
     * Filter which CampaignSteps to update
     */
    where?: CampaignStepWhereInput
    /**
     * Limit how many CampaignSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignStep upsert
   */
  export type CampaignStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignStep to update in case it exists.
     */
    where: CampaignStepWhereUniqueInput
    /**
     * In case the CampaignStep found by the `where` argument doesn't exist, create a new CampaignStep with this data.
     */
    create: XOR<CampaignStepCreateInput, CampaignStepUncheckedCreateInput>
    /**
     * In case the CampaignStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignStepUpdateInput, CampaignStepUncheckedUpdateInput>
  }

  /**
   * CampaignStep delete
   */
  export type CampaignStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    /**
     * Filter which CampaignStep to delete.
     */
    where: CampaignStepWhereUniqueInput
  }

  /**
   * CampaignStep deleteMany
   */
  export type CampaignStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignSteps to delete
     */
    where?: CampaignStepWhereInput
    /**
     * Limit how many CampaignSteps to delete.
     */
    limit?: number
  }

  /**
   * CampaignStep.emailEvents
   */
  export type CampaignStep$emailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    where?: EmailEventWhereInput
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    cursor?: EmailEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * CampaignStep without action
   */
  export type CampaignStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
  }


  /**
   * Model CampaignClient
   */

  export type AggregateCampaignClient = {
    _count: CampaignClientCountAggregateOutputType | null
    _avg: CampaignClientAvgAggregateOutputType | null
    _sum: CampaignClientSumAggregateOutputType | null
    _min: CampaignClientMinAggregateOutputType | null
    _max: CampaignClientMaxAggregateOutputType | null
  }

  export type CampaignClientAvgAggregateOutputType = {
    campaignId: number | null
    clientId: number | null
    currentStepOrder: number | null
  }

  export type CampaignClientSumAggregateOutputType = {
    campaignId: number | null
    clientId: number | null
    currentStepOrder: number | null
  }

  export type CampaignClientMinAggregateOutputType = {
    campaignId: number | null
    clientId: number | null
    statusInCampaign: $Enums.ClientCampaignStatus | null
    currentStepOrder: number | null
    nextSendTime: Date | null
    addedAt: Date | null
  }

  export type CampaignClientMaxAggregateOutputType = {
    campaignId: number | null
    clientId: number | null
    statusInCampaign: $Enums.ClientCampaignStatus | null
    currentStepOrder: number | null
    nextSendTime: Date | null
    addedAt: Date | null
  }

  export type CampaignClientCountAggregateOutputType = {
    campaignId: number
    clientId: number
    statusInCampaign: number
    currentStepOrder: number
    nextSendTime: number
    addedAt: number
    _all: number
  }


  export type CampaignClientAvgAggregateInputType = {
    campaignId?: true
    clientId?: true
    currentStepOrder?: true
  }

  export type CampaignClientSumAggregateInputType = {
    campaignId?: true
    clientId?: true
    currentStepOrder?: true
  }

  export type CampaignClientMinAggregateInputType = {
    campaignId?: true
    clientId?: true
    statusInCampaign?: true
    currentStepOrder?: true
    nextSendTime?: true
    addedAt?: true
  }

  export type CampaignClientMaxAggregateInputType = {
    campaignId?: true
    clientId?: true
    statusInCampaign?: true
    currentStepOrder?: true
    nextSendTime?: true
    addedAt?: true
  }

  export type CampaignClientCountAggregateInputType = {
    campaignId?: true
    clientId?: true
    statusInCampaign?: true
    currentStepOrder?: true
    nextSendTime?: true
    addedAt?: true
    _all?: true
  }

  export type CampaignClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignClient to aggregate.
     */
    where?: CampaignClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignClients to fetch.
     */
    orderBy?: CampaignClientOrderByWithRelationInput | CampaignClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignClients
    **/
    _count?: true | CampaignClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignClientMaxAggregateInputType
  }

  export type GetCampaignClientAggregateType<T extends CampaignClientAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignClient[P]>
      : GetScalarType<T[P], AggregateCampaignClient[P]>
  }




  export type CampaignClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignClientWhereInput
    orderBy?: CampaignClientOrderByWithAggregationInput | CampaignClientOrderByWithAggregationInput[]
    by: CampaignClientScalarFieldEnum[] | CampaignClientScalarFieldEnum
    having?: CampaignClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignClientCountAggregateInputType | true
    _avg?: CampaignClientAvgAggregateInputType
    _sum?: CampaignClientSumAggregateInputType
    _min?: CampaignClientMinAggregateInputType
    _max?: CampaignClientMaxAggregateInputType
  }

  export type CampaignClientGroupByOutputType = {
    campaignId: number
    clientId: number
    statusInCampaign: $Enums.ClientCampaignStatus
    currentStepOrder: number | null
    nextSendTime: Date | null
    addedAt: Date
    _count: CampaignClientCountAggregateOutputType | null
    _avg: CampaignClientAvgAggregateOutputType | null
    _sum: CampaignClientSumAggregateOutputType | null
    _min: CampaignClientMinAggregateOutputType | null
    _max: CampaignClientMaxAggregateOutputType | null
  }

  type GetCampaignClientGroupByPayload<T extends CampaignClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignClientGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignClientGroupByOutputType[P]>
        }
      >
    >


  export type CampaignClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaignId?: boolean
    clientId?: boolean
    statusInCampaign?: boolean
    currentStepOrder?: boolean
    nextSendTime?: boolean
    addedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    emailEvents?: boolean | CampaignClient$emailEventsArgs<ExtArgs>
    _count?: boolean | CampaignClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignClient"]>

  export type CampaignClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaignId?: boolean
    clientId?: boolean
    statusInCampaign?: boolean
    currentStepOrder?: boolean
    nextSendTime?: boolean
    addedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignClient"]>

  export type CampaignClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaignId?: boolean
    clientId?: boolean
    statusInCampaign?: boolean
    currentStepOrder?: boolean
    nextSendTime?: boolean
    addedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignClient"]>

  export type CampaignClientSelectScalar = {
    campaignId?: boolean
    clientId?: boolean
    statusInCampaign?: boolean
    currentStepOrder?: boolean
    nextSendTime?: boolean
    addedAt?: boolean
  }

  export type CampaignClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"campaignId" | "clientId" | "statusInCampaign" | "currentStepOrder" | "nextSendTime" | "addedAt", ExtArgs["result"]["campaignClient"]>
  export type CampaignClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    emailEvents?: boolean | CampaignClient$emailEventsArgs<ExtArgs>
    _count?: boolean | CampaignClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type CampaignClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $CampaignClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignClient"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      emailEvents: Prisma.$EmailEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      campaignId: number
      clientId: number
      statusInCampaign: $Enums.ClientCampaignStatus
      currentStepOrder: number | null
      nextSendTime: Date | null
      addedAt: Date
    }, ExtArgs["result"]["campaignClient"]>
    composites: {}
  }

  type CampaignClientGetPayload<S extends boolean | null | undefined | CampaignClientDefaultArgs> = $Result.GetResult<Prisma.$CampaignClientPayload, S>

  type CampaignClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignClientCountAggregateInputType | true
    }

  export interface CampaignClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignClient'], meta: { name: 'CampaignClient' } }
    /**
     * Find zero or one CampaignClient that matches the filter.
     * @param {CampaignClientFindUniqueArgs} args - Arguments to find a CampaignClient
     * @example
     * // Get one CampaignClient
     * const campaignClient = await prisma.campaignClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignClientFindUniqueArgs>(args: SelectSubset<T, CampaignClientFindUniqueArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignClientFindUniqueOrThrowArgs} args - Arguments to find a CampaignClient
     * @example
     * // Get one CampaignClient
     * const campaignClient = await prisma.campaignClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignClientFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignClientFindFirstArgs} args - Arguments to find a CampaignClient
     * @example
     * // Get one CampaignClient
     * const campaignClient = await prisma.campaignClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignClientFindFirstArgs>(args?: SelectSubset<T, CampaignClientFindFirstArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignClientFindFirstOrThrowArgs} args - Arguments to find a CampaignClient
     * @example
     * // Get one CampaignClient
     * const campaignClient = await prisma.campaignClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignClientFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignClients
     * const campaignClients = await prisma.campaignClient.findMany()
     * 
     * // Get first 10 CampaignClients
     * const campaignClients = await prisma.campaignClient.findMany({ take: 10 })
     * 
     * // Only select the `campaignId`
     * const campaignClientWithCampaignIdOnly = await prisma.campaignClient.findMany({ select: { campaignId: true } })
     * 
     */
    findMany<T extends CampaignClientFindManyArgs>(args?: SelectSubset<T, CampaignClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignClient.
     * @param {CampaignClientCreateArgs} args - Arguments to create a CampaignClient.
     * @example
     * // Create one CampaignClient
     * const CampaignClient = await prisma.campaignClient.create({
     *   data: {
     *     // ... data to create a CampaignClient
     *   }
     * })
     * 
     */
    create<T extends CampaignClientCreateArgs>(args: SelectSubset<T, CampaignClientCreateArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignClients.
     * @param {CampaignClientCreateManyArgs} args - Arguments to create many CampaignClients.
     * @example
     * // Create many CampaignClients
     * const campaignClient = await prisma.campaignClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignClientCreateManyArgs>(args?: SelectSubset<T, CampaignClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignClients and returns the data saved in the database.
     * @param {CampaignClientCreateManyAndReturnArgs} args - Arguments to create many CampaignClients.
     * @example
     * // Create many CampaignClients
     * const campaignClient = await prisma.campaignClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignClients and only return the `campaignId`
     * const campaignClientWithCampaignIdOnly = await prisma.campaignClient.createManyAndReturn({
     *   select: { campaignId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignClientCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignClient.
     * @param {CampaignClientDeleteArgs} args - Arguments to delete one CampaignClient.
     * @example
     * // Delete one CampaignClient
     * const CampaignClient = await prisma.campaignClient.delete({
     *   where: {
     *     // ... filter to delete one CampaignClient
     *   }
     * })
     * 
     */
    delete<T extends CampaignClientDeleteArgs>(args: SelectSubset<T, CampaignClientDeleteArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignClient.
     * @param {CampaignClientUpdateArgs} args - Arguments to update one CampaignClient.
     * @example
     * // Update one CampaignClient
     * const campaignClient = await prisma.campaignClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignClientUpdateArgs>(args: SelectSubset<T, CampaignClientUpdateArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignClients.
     * @param {CampaignClientDeleteManyArgs} args - Arguments to filter CampaignClients to delete.
     * @example
     * // Delete a few CampaignClients
     * const { count } = await prisma.campaignClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignClientDeleteManyArgs>(args?: SelectSubset<T, CampaignClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignClients
     * const campaignClient = await prisma.campaignClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignClientUpdateManyArgs>(args: SelectSubset<T, CampaignClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignClients and returns the data updated in the database.
     * @param {CampaignClientUpdateManyAndReturnArgs} args - Arguments to update many CampaignClients.
     * @example
     * // Update many CampaignClients
     * const campaignClient = await prisma.campaignClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignClients and only return the `campaignId`
     * const campaignClientWithCampaignIdOnly = await prisma.campaignClient.updateManyAndReturn({
     *   select: { campaignId: true },
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
    updateManyAndReturn<T extends CampaignClientUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignClient.
     * @param {CampaignClientUpsertArgs} args - Arguments to update or create a CampaignClient.
     * @example
     * // Update or create a CampaignClient
     * const campaignClient = await prisma.campaignClient.upsert({
     *   create: {
     *     // ... data to create a CampaignClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignClient we want to update
     *   }
     * })
     */
    upsert<T extends CampaignClientUpsertArgs>(args: SelectSubset<T, CampaignClientUpsertArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignClientCountArgs} args - Arguments to filter CampaignClients to count.
     * @example
     * // Count the number of CampaignClients
     * const count = await prisma.campaignClient.count({
     *   where: {
     *     // ... the filter for the CampaignClients we want to count
     *   }
     * })
    **/
    count<T extends CampaignClientCountArgs>(
      args?: Subset<T, CampaignClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignClientAggregateArgs>(args: Subset<T, CampaignClientAggregateArgs>): Prisma.PrismaPromise<GetCampaignClientAggregateType<T>>

    /**
     * Group by CampaignClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignClientGroupByArgs} args - Group by arguments.
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
      T extends CampaignClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignClientGroupByArgs['orderBy'] }
        : { orderBy?: CampaignClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignClient model
   */
  readonly fields: CampaignClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emailEvents<T extends CampaignClient$emailEventsArgs<ExtArgs> = {}>(args?: Subset<T, CampaignClient$emailEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CampaignClient model
   */
  interface CampaignClientFieldRefs {
    readonly campaignId: FieldRef<"CampaignClient", 'Int'>
    readonly clientId: FieldRef<"CampaignClient", 'Int'>
    readonly statusInCampaign: FieldRef<"CampaignClient", 'ClientCampaignStatus'>
    readonly currentStepOrder: FieldRef<"CampaignClient", 'Int'>
    readonly nextSendTime: FieldRef<"CampaignClient", 'DateTime'>
    readonly addedAt: FieldRef<"CampaignClient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignClient findUnique
   */
  export type CampaignClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignClient to fetch.
     */
    where: CampaignClientWhereUniqueInput
  }

  /**
   * CampaignClient findUniqueOrThrow
   */
  export type CampaignClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignClient to fetch.
     */
    where: CampaignClientWhereUniqueInput
  }

  /**
   * CampaignClient findFirst
   */
  export type CampaignClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignClient to fetch.
     */
    where?: CampaignClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignClients to fetch.
     */
    orderBy?: CampaignClientOrderByWithRelationInput | CampaignClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignClients.
     */
    cursor?: CampaignClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignClients.
     */
    distinct?: CampaignClientScalarFieldEnum | CampaignClientScalarFieldEnum[]
  }

  /**
   * CampaignClient findFirstOrThrow
   */
  export type CampaignClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignClient to fetch.
     */
    where?: CampaignClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignClients to fetch.
     */
    orderBy?: CampaignClientOrderByWithRelationInput | CampaignClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignClients.
     */
    cursor?: CampaignClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignClients.
     */
    distinct?: CampaignClientScalarFieldEnum | CampaignClientScalarFieldEnum[]
  }

  /**
   * CampaignClient findMany
   */
  export type CampaignClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignClients to fetch.
     */
    where?: CampaignClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignClients to fetch.
     */
    orderBy?: CampaignClientOrderByWithRelationInput | CampaignClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignClients.
     */
    cursor?: CampaignClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignClients.
     */
    skip?: number
    distinct?: CampaignClientScalarFieldEnum | CampaignClientScalarFieldEnum[]
  }

  /**
   * CampaignClient create
   */
  export type CampaignClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignClient.
     */
    data: XOR<CampaignClientCreateInput, CampaignClientUncheckedCreateInput>
  }

  /**
   * CampaignClient createMany
   */
  export type CampaignClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignClients.
     */
    data: CampaignClientCreateManyInput | CampaignClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignClient createManyAndReturn
   */
  export type CampaignClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignClients.
     */
    data: CampaignClientCreateManyInput | CampaignClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignClient update
   */
  export type CampaignClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignClient.
     */
    data: XOR<CampaignClientUpdateInput, CampaignClientUncheckedUpdateInput>
    /**
     * Choose, which CampaignClient to update.
     */
    where: CampaignClientWhereUniqueInput
  }

  /**
   * CampaignClient updateMany
   */
  export type CampaignClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignClients.
     */
    data: XOR<CampaignClientUpdateManyMutationInput, CampaignClientUncheckedUpdateManyInput>
    /**
     * Filter which CampaignClients to update
     */
    where?: CampaignClientWhereInput
    /**
     * Limit how many CampaignClients to update.
     */
    limit?: number
  }

  /**
   * CampaignClient updateManyAndReturn
   */
  export type CampaignClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * The data used to update CampaignClients.
     */
    data: XOR<CampaignClientUpdateManyMutationInput, CampaignClientUncheckedUpdateManyInput>
    /**
     * Filter which CampaignClients to update
     */
    where?: CampaignClientWhereInput
    /**
     * Limit how many CampaignClients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignClient upsert
   */
  export type CampaignClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignClient to update in case it exists.
     */
    where: CampaignClientWhereUniqueInput
    /**
     * In case the CampaignClient found by the `where` argument doesn't exist, create a new CampaignClient with this data.
     */
    create: XOR<CampaignClientCreateInput, CampaignClientUncheckedCreateInput>
    /**
     * In case the CampaignClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignClientUpdateInput, CampaignClientUncheckedUpdateInput>
  }

  /**
   * CampaignClient delete
   */
  export type CampaignClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    /**
     * Filter which CampaignClient to delete.
     */
    where: CampaignClientWhereUniqueInput
  }

  /**
   * CampaignClient deleteMany
   */
  export type CampaignClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignClients to delete
     */
    where?: CampaignClientWhereInput
    /**
     * Limit how many CampaignClients to delete.
     */
    limit?: number
  }

  /**
   * CampaignClient.emailEvents
   */
  export type CampaignClient$emailEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    where?: EmailEventWhereInput
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    cursor?: EmailEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * CampaignClient without action
   */
  export type CampaignClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
  }


  /**
   * Model EmailEvent
   */

  export type AggregateEmailEvent = {
    _count: EmailEventCountAggregateOutputType | null
    _avg: EmailEventAvgAggregateOutputType | null
    _sum: EmailEventSumAggregateOutputType | null
    _min: EmailEventMinAggregateOutputType | null
    _max: EmailEventMaxAggregateOutputType | null
  }

  export type EmailEventAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    clientId: number | null
    campaignStepId: number | null
    campaignClientId: number | null
  }

  export type EmailEventSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    clientId: number | null
    campaignStepId: number | null
    campaignClientId: number | null
  }

  export type EmailEventMinAggregateOutputType = {
    id: number | null
    type: $Enums.EmailEventType | null
    timestamp: Date | null
    campaignId: number | null
    clientId: number | null
    campaignStepId: number | null
    campaignClientId: number | null
    metadata: string | null
  }

  export type EmailEventMaxAggregateOutputType = {
    id: number | null
    type: $Enums.EmailEventType | null
    timestamp: Date | null
    campaignId: number | null
    clientId: number | null
    campaignStepId: number | null
    campaignClientId: number | null
    metadata: string | null
  }

  export type EmailEventCountAggregateOutputType = {
    id: number
    type: number
    timestamp: number
    campaignId: number
    clientId: number
    campaignStepId: number
    campaignClientId: number
    metadata: number
    _all: number
  }


  export type EmailEventAvgAggregateInputType = {
    id?: true
    campaignId?: true
    clientId?: true
    campaignStepId?: true
    campaignClientId?: true
  }

  export type EmailEventSumAggregateInputType = {
    id?: true
    campaignId?: true
    clientId?: true
    campaignStepId?: true
    campaignClientId?: true
  }

  export type EmailEventMinAggregateInputType = {
    id?: true
    type?: true
    timestamp?: true
    campaignId?: true
    clientId?: true
    campaignStepId?: true
    campaignClientId?: true
    metadata?: true
  }

  export type EmailEventMaxAggregateInputType = {
    id?: true
    type?: true
    timestamp?: true
    campaignId?: true
    clientId?: true
    campaignStepId?: true
    campaignClientId?: true
    metadata?: true
  }

  export type EmailEventCountAggregateInputType = {
    id?: true
    type?: true
    timestamp?: true
    campaignId?: true
    clientId?: true
    campaignStepId?: true
    campaignClientId?: true
    metadata?: true
    _all?: true
  }

  export type EmailEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailEvent to aggregate.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailEvents
    **/
    _count?: true | EmailEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailEventMaxAggregateInputType
  }

  export type GetEmailEventAggregateType<T extends EmailEventAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailEvent[P]>
      : GetScalarType<T[P], AggregateEmailEvent[P]>
  }




  export type EmailEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailEventWhereInput
    orderBy?: EmailEventOrderByWithAggregationInput | EmailEventOrderByWithAggregationInput[]
    by: EmailEventScalarFieldEnum[] | EmailEventScalarFieldEnum
    having?: EmailEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailEventCountAggregateInputType | true
    _avg?: EmailEventAvgAggregateInputType
    _sum?: EmailEventSumAggregateInputType
    _min?: EmailEventMinAggregateInputType
    _max?: EmailEventMaxAggregateInputType
  }

  export type EmailEventGroupByOutputType = {
    id: number
    type: $Enums.EmailEventType
    timestamp: Date
    campaignId: number
    clientId: number
    campaignStepId: number | null
    campaignClientId: number | null
    metadata: string | null
    _count: EmailEventCountAggregateOutputType | null
    _avg: EmailEventAvgAggregateOutputType | null
    _sum: EmailEventSumAggregateOutputType | null
    _min: EmailEventMinAggregateOutputType | null
    _max: EmailEventMaxAggregateOutputType | null
  }

  type GetEmailEventGroupByPayload<T extends EmailEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailEventGroupByOutputType[P]>
            : GetScalarType<T[P], EmailEventGroupByOutputType[P]>
        }
      >
    >


  export type EmailEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    timestamp?: boolean
    campaignId?: boolean
    clientId?: boolean
    campaignStepId?: boolean
    campaignClientId?: boolean
    metadata?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    campaignStep?: boolean | EmailEvent$campaignStepArgs<ExtArgs>
    campaignClient?: boolean | EmailEvent$campaignClientArgs<ExtArgs>
  }, ExtArgs["result"]["emailEvent"]>

  export type EmailEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    timestamp?: boolean
    campaignId?: boolean
    clientId?: boolean
    campaignStepId?: boolean
    campaignClientId?: boolean
    metadata?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    campaignStep?: boolean | EmailEvent$campaignStepArgs<ExtArgs>
    campaignClient?: boolean | EmailEvent$campaignClientArgs<ExtArgs>
  }, ExtArgs["result"]["emailEvent"]>

  export type EmailEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    timestamp?: boolean
    campaignId?: boolean
    clientId?: boolean
    campaignStepId?: boolean
    campaignClientId?: boolean
    metadata?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    campaignStep?: boolean | EmailEvent$campaignStepArgs<ExtArgs>
    campaignClient?: boolean | EmailEvent$campaignClientArgs<ExtArgs>
  }, ExtArgs["result"]["emailEvent"]>

  export type EmailEventSelectScalar = {
    id?: boolean
    type?: boolean
    timestamp?: boolean
    campaignId?: boolean
    clientId?: boolean
    campaignStepId?: boolean
    campaignClientId?: boolean
    metadata?: boolean
  }

  export type EmailEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "timestamp" | "campaignId" | "clientId" | "campaignStepId" | "campaignClientId" | "metadata", ExtArgs["result"]["emailEvent"]>
  export type EmailEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    campaignStep?: boolean | EmailEvent$campaignStepArgs<ExtArgs>
    campaignClient?: boolean | EmailEvent$campaignClientArgs<ExtArgs>
  }
  export type EmailEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    campaignStep?: boolean | EmailEvent$campaignStepArgs<ExtArgs>
    campaignClient?: boolean | EmailEvent$campaignClientArgs<ExtArgs>
  }
  export type EmailEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    campaignStep?: boolean | EmailEvent$campaignStepArgs<ExtArgs>
    campaignClient?: boolean | EmailEvent$campaignClientArgs<ExtArgs>
  }

  export type $EmailEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailEvent"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      campaignStep: Prisma.$CampaignStepPayload<ExtArgs> | null
      campaignClient: Prisma.$CampaignClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.EmailEventType
      timestamp: Date
      campaignId: number
      clientId: number
      campaignStepId: number | null
      campaignClientId: number | null
      metadata: string | null
    }, ExtArgs["result"]["emailEvent"]>
    composites: {}
  }

  type EmailEventGetPayload<S extends boolean | null | undefined | EmailEventDefaultArgs> = $Result.GetResult<Prisma.$EmailEventPayload, S>

  type EmailEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailEventCountAggregateInputType | true
    }

  export interface EmailEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailEvent'], meta: { name: 'EmailEvent' } }
    /**
     * Find zero or one EmailEvent that matches the filter.
     * @param {EmailEventFindUniqueArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailEventFindUniqueArgs>(args: SelectSubset<T, EmailEventFindUniqueArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailEventFindUniqueOrThrowArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailEventFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventFindFirstArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailEventFindFirstArgs>(args?: SelectSubset<T, EmailEventFindFirstArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventFindFirstOrThrowArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailEventFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailEvents
     * const emailEvents = await prisma.emailEvent.findMany()
     * 
     * // Get first 10 EmailEvents
     * const emailEvents = await prisma.emailEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailEventWithIdOnly = await prisma.emailEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailEventFindManyArgs>(args?: SelectSubset<T, EmailEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailEvent.
     * @param {EmailEventCreateArgs} args - Arguments to create a EmailEvent.
     * @example
     * // Create one EmailEvent
     * const EmailEvent = await prisma.emailEvent.create({
     *   data: {
     *     // ... data to create a EmailEvent
     *   }
     * })
     * 
     */
    create<T extends EmailEventCreateArgs>(args: SelectSubset<T, EmailEventCreateArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailEvents.
     * @param {EmailEventCreateManyArgs} args - Arguments to create many EmailEvents.
     * @example
     * // Create many EmailEvents
     * const emailEvent = await prisma.emailEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailEventCreateManyArgs>(args?: SelectSubset<T, EmailEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailEvents and returns the data saved in the database.
     * @param {EmailEventCreateManyAndReturnArgs} args - Arguments to create many EmailEvents.
     * @example
     * // Create many EmailEvents
     * const emailEvent = await prisma.emailEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailEvents and only return the `id`
     * const emailEventWithIdOnly = await prisma.emailEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailEventCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailEvent.
     * @param {EmailEventDeleteArgs} args - Arguments to delete one EmailEvent.
     * @example
     * // Delete one EmailEvent
     * const EmailEvent = await prisma.emailEvent.delete({
     *   where: {
     *     // ... filter to delete one EmailEvent
     *   }
     * })
     * 
     */
    delete<T extends EmailEventDeleteArgs>(args: SelectSubset<T, EmailEventDeleteArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailEvent.
     * @param {EmailEventUpdateArgs} args - Arguments to update one EmailEvent.
     * @example
     * // Update one EmailEvent
     * const emailEvent = await prisma.emailEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailEventUpdateArgs>(args: SelectSubset<T, EmailEventUpdateArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailEvents.
     * @param {EmailEventDeleteManyArgs} args - Arguments to filter EmailEvents to delete.
     * @example
     * // Delete a few EmailEvents
     * const { count } = await prisma.emailEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailEventDeleteManyArgs>(args?: SelectSubset<T, EmailEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailEvents
     * const emailEvent = await prisma.emailEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailEventUpdateManyArgs>(args: SelectSubset<T, EmailEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailEvents and returns the data updated in the database.
     * @param {EmailEventUpdateManyAndReturnArgs} args - Arguments to update many EmailEvents.
     * @example
     * // Update many EmailEvents
     * const emailEvent = await prisma.emailEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailEvents and only return the `id`
     * const emailEventWithIdOnly = await prisma.emailEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailEventUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailEvent.
     * @param {EmailEventUpsertArgs} args - Arguments to update or create a EmailEvent.
     * @example
     * // Update or create a EmailEvent
     * const emailEvent = await prisma.emailEvent.upsert({
     *   create: {
     *     // ... data to create a EmailEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailEvent we want to update
     *   }
     * })
     */
    upsert<T extends EmailEventUpsertArgs>(args: SelectSubset<T, EmailEventUpsertArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventCountArgs} args - Arguments to filter EmailEvents to count.
     * @example
     * // Count the number of EmailEvents
     * const count = await prisma.emailEvent.count({
     *   where: {
     *     // ... the filter for the EmailEvents we want to count
     *   }
     * })
    **/
    count<T extends EmailEventCountArgs>(
      args?: Subset<T, EmailEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailEventAggregateArgs>(args: Subset<T, EmailEventAggregateArgs>): Prisma.PrismaPromise<GetEmailEventAggregateType<T>>

    /**
     * Group by EmailEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventGroupByArgs} args - Group by arguments.
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
      T extends EmailEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailEventGroupByArgs['orderBy'] }
        : { orderBy?: EmailEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailEvent model
   */
  readonly fields: EmailEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaignStep<T extends EmailEvent$campaignStepArgs<ExtArgs> = {}>(args?: Subset<T, EmailEvent$campaignStepArgs<ExtArgs>>): Prisma__CampaignStepClient<$Result.GetResult<Prisma.$CampaignStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    campaignClient<T extends EmailEvent$campaignClientArgs<ExtArgs> = {}>(args?: Subset<T, EmailEvent$campaignClientArgs<ExtArgs>>): Prisma__CampaignClientClient<$Result.GetResult<Prisma.$CampaignClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailEvent model
   */
  interface EmailEventFieldRefs {
    readonly id: FieldRef<"EmailEvent", 'Int'>
    readonly type: FieldRef<"EmailEvent", 'EmailEventType'>
    readonly timestamp: FieldRef<"EmailEvent", 'DateTime'>
    readonly campaignId: FieldRef<"EmailEvent", 'Int'>
    readonly clientId: FieldRef<"EmailEvent", 'Int'>
    readonly campaignStepId: FieldRef<"EmailEvent", 'Int'>
    readonly campaignClientId: FieldRef<"EmailEvent", 'Int'>
    readonly metadata: FieldRef<"EmailEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailEvent findUnique
   */
  export type EmailEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent findUniqueOrThrow
   */
  export type EmailEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent findFirst
   */
  export type EmailEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailEvents.
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailEvents.
     */
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * EmailEvent findFirstOrThrow
   */
  export type EmailEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailEvents.
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailEvents.
     */
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * EmailEvent findMany
   */
  export type EmailEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * Filter, which EmailEvents to fetch.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailEvents.
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * EmailEvent create
   */
  export type EmailEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailEvent.
     */
    data: XOR<EmailEventCreateInput, EmailEventUncheckedCreateInput>
  }

  /**
   * EmailEvent createMany
   */
  export type EmailEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailEvents.
     */
    data: EmailEventCreateManyInput | EmailEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailEvent createManyAndReturn
   */
  export type EmailEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * The data used to create many EmailEvents.
     */
    data: EmailEventCreateManyInput | EmailEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailEvent update
   */
  export type EmailEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailEvent.
     */
    data: XOR<EmailEventUpdateInput, EmailEventUncheckedUpdateInput>
    /**
     * Choose, which EmailEvent to update.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent updateMany
   */
  export type EmailEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailEvents.
     */
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyInput>
    /**
     * Filter which EmailEvents to update
     */
    where?: EmailEventWhereInput
    /**
     * Limit how many EmailEvents to update.
     */
    limit?: number
  }

  /**
   * EmailEvent updateManyAndReturn
   */
  export type EmailEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * The data used to update EmailEvents.
     */
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyInput>
    /**
     * Filter which EmailEvents to update
     */
    where?: EmailEventWhereInput
    /**
     * Limit how many EmailEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailEvent upsert
   */
  export type EmailEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailEvent to update in case it exists.
     */
    where: EmailEventWhereUniqueInput
    /**
     * In case the EmailEvent found by the `where` argument doesn't exist, create a new EmailEvent with this data.
     */
    create: XOR<EmailEventCreateInput, EmailEventUncheckedCreateInput>
    /**
     * In case the EmailEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailEventUpdateInput, EmailEventUncheckedUpdateInput>
  }

  /**
   * EmailEvent delete
   */
  export type EmailEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
    /**
     * Filter which EmailEvent to delete.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent deleteMany
   */
  export type EmailEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailEvents to delete
     */
    where?: EmailEventWhereInput
    /**
     * Limit how many EmailEvents to delete.
     */
    limit?: number
  }

  /**
   * EmailEvent.campaignStep
   */
  export type EmailEvent$campaignStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignStep
     */
    select?: CampaignStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignStep
     */
    omit?: CampaignStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignStepInclude<ExtArgs> | null
    where?: CampaignStepWhereInput
  }

  /**
   * EmailEvent.campaignClient
   */
  export type EmailEvent$campaignClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignClient
     */
    select?: CampaignClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignClient
     */
    omit?: CampaignClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignClientInclude<ExtArgs> | null
    where?: CampaignClientWhereInput
  }

  /**
   * EmailEvent without action
   */
  export type EmailEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailEventInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceAvgAggregateOutputType = {
    id: number | null
  }

  export type UserPreferenceSumAggregateOutputType = {
    id: number | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: number | null
    userId: string | null
    theme: $Enums.ThemePreference | null
    layoutDensity: $Enums.LayoutDensity | null
    timezone: string | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    theme: $Enums.ThemePreference | null
    layoutDensity: $Enums.LayoutDensity | null
    timezone: string | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    theme: number
    layoutDensity: number
    timezone: number
    _all: number
  }


  export type UserPreferenceAvgAggregateInputType = {
    id?: true
  }

  export type UserPreferenceSumAggregateInputType = {
    id?: true
  }

  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    layoutDensity?: true
    timezone?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    layoutDensity?: true
    timezone?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    layoutDensity?: true
    timezone?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _avg?: UserPreferenceAvgAggregateInputType
    _sum?: UserPreferenceSumAggregateInputType
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: number
    userId: string
    theme: $Enums.ThemePreference
    layoutDensity: $Enums.LayoutDensity
    timezone: string
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    layoutDensity?: boolean
    timezone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    layoutDensity?: boolean
    timezone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    layoutDensity?: boolean
    timezone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    theme?: boolean
    layoutDensity?: boolean
    timezone?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "theme" | "layoutDensity" | "timezone", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      theme: $Enums.ThemePreference
      layoutDensity: $Enums.LayoutDensity
      timezone: string
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'Int'>
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly theme: FieldRef<"UserPreference", 'ThemePreference'>
    readonly layoutDensity: FieldRef<"UserPreference", 'LayoutDensity'>
    readonly timezone: FieldRef<"UserPreference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
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
    name: 'name',
    username: 'username',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    passwordHash: 'passwordHash',
    companyId: 'companyId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stripeCustomerId: 'stripeCustomerId',
    planType: 'planType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    notes: 'notes',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    bodyHtml: 'bodyHtml',
    companyId: 'companyId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    companyId: 'companyId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const CampaignStepScalarFieldEnum: {
    id: 'id',
    sequenceOrder: 'sequenceOrder',
    delayDays: 'delayDays',
    templateId: 'templateId',
    campaignId: 'campaignId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sendDays: 'sendDays',
    sendTimeStart: 'sendTimeStart',
    sendTimeEnd: 'sendTimeEnd'
  };

  export type CampaignStepScalarFieldEnum = (typeof CampaignStepScalarFieldEnum)[keyof typeof CampaignStepScalarFieldEnum]


  export const CampaignClientScalarFieldEnum: {
    campaignId: 'campaignId',
    clientId: 'clientId',
    statusInCampaign: 'statusInCampaign',
    currentStepOrder: 'currentStepOrder',
    nextSendTime: 'nextSendTime',
    addedAt: 'addedAt'
  };

  export type CampaignClientScalarFieldEnum = (typeof CampaignClientScalarFieldEnum)[keyof typeof CampaignClientScalarFieldEnum]


  export const EmailEventScalarFieldEnum: {
    id: 'id',
    type: 'type',
    timestamp: 'timestamp',
    campaignId: 'campaignId',
    clientId: 'clientId',
    campaignStepId: 'campaignStepId',
    campaignClientId: 'campaignClientId',
    metadata: 'metadata'
  };

  export type EmailEventScalarFieldEnum = (typeof EmailEventScalarFieldEnum)[keyof typeof EmailEventScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    theme: 'theme',
    layoutDensity: 'layoutDensity',
    timezone: 'timezone'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'ClientCampaignStatus'
   */
  export type EnumClientCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientCampaignStatus'>
    


  /**
   * Reference to a field of type 'ClientCampaignStatus[]'
   */
  export type ListEnumClientCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientCampaignStatus[]'>
    


  /**
   * Reference to a field of type 'EmailEventType'
   */
  export type EnumEmailEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailEventType'>
    


  /**
   * Reference to a field of type 'EmailEventType[]'
   */
  export type ListEnumEmailEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailEventType[]'>
    


  /**
   * Reference to a field of type 'ThemePreference'
   */
  export type EnumThemePreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ThemePreference'>
    


  /**
   * Reference to a field of type 'ThemePreference[]'
   */
  export type ListEnumThemePreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ThemePreference[]'>
    


  /**
   * Reference to a field of type 'LayoutDensity'
   */
  export type EnumLayoutDensityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LayoutDensity'>
    


  /**
   * Reference to a field of type 'LayoutDensity[]'
   */
  export type ListEnumLayoutDensityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LayoutDensity[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    companyId?: IntNullableFilter<"User"> | number | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
    templates?: TemplateListRelationFilter
    campaigns?: CampaignListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
    preferences?: UserPreferenceOrderByWithRelationInput
    templates?: TemplateOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    companyId?: IntNullableFilter<"User"> | number | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
    templates?: TemplateListRelationFilter
    campaigns?: CampaignListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyId?: IntNullableWithAggregatesFilter<"User"> | number | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    stripeCustomerId?: StringNullableFilter<"Company"> | string | null
    planType?: EnumPlanTypeFilter<"Company"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    clients?: ClientListRelationFilter
    templates?: TemplateListRelationFilter
    campaigns?: CampaignListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    planType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    stripeCustomerId?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    planType?: EnumPlanTypeFilter<"Company"> | $Enums.PlanType
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    clients?: ClientListRelationFilter
    templates?: TemplateListRelationFilter
    campaigns?: CampaignListRelationFilter
  }, "id" | "stripeCustomerId">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    planType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Company"> | string | null
    planType?: EnumPlanTypeWithAggregatesFilter<"Company"> | $Enums.PlanType
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    email?: StringFilter<"Client"> | string
    firstName?: StringNullableFilter<"Client"> | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    companyId?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    campaigns?: CampaignClientListRelationFilter
    emailEvents?: EmailEventListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    campaigns?: CampaignClientOrderByRelationAggregateInput
    emailEvents?: EmailEventOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    companyId_email?: ClientCompanyIdEmailCompoundUniqueInput
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    email?: StringFilter<"Client"> | string
    firstName?: StringNullableFilter<"Client"> | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    companyId?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    campaigns?: CampaignClientListRelationFilter
    emailEvents?: EmailEventListRelationFilter
  }, "id" | "companyId_email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    email?: StringWithAggregatesFilter<"Client"> | string
    firstName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    companyId?: IntWithAggregatesFilter<"Client"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
    subject?: StringFilter<"Template"> | string
    bodyHtml?: StringFilter<"Template"> | string
    companyId?: IntFilter<"Template"> | number
    createdById?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    campaignSteps?: CampaignStepListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    bodyHtml?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    campaignSteps?: CampaignStepOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    subject?: StringFilter<"Template"> | string
    bodyHtml?: StringFilter<"Template"> | string
    companyId?: IntFilter<"Template"> | number
    createdById?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    campaignSteps?: CampaignStepListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    bodyHtml?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Template"> | number
    name?: StringWithAggregatesFilter<"Template"> | string
    subject?: StringWithAggregatesFilter<"Template"> | string
    bodyHtml?: StringWithAggregatesFilter<"Template"> | string
    companyId?: IntWithAggregatesFilter<"Template"> | number
    createdById?: StringNullableWithAggregatesFilter<"Template"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    name?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    companyId?: IntFilter<"Campaign"> | number
    createdById?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    steps?: CampaignStepListRelationFilter
    clients?: CampaignClientListRelationFilter
    emailEvents?: EmailEventListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    steps?: CampaignStepOrderByRelationAggregateInput
    clients?: CampaignClientOrderByRelationAggregateInput
    emailEvents?: EmailEventOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    companyId?: IntFilter<"Campaign"> | number
    createdById?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    steps?: CampaignStepListRelationFilter
    clients?: CampaignClientListRelationFilter
    emailEvents?: EmailEventListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    name?: StringWithAggregatesFilter<"Campaign"> | string
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    companyId?: IntWithAggregatesFilter<"Campaign"> | number
    createdById?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type CampaignStepWhereInput = {
    AND?: CampaignStepWhereInput | CampaignStepWhereInput[]
    OR?: CampaignStepWhereInput[]
    NOT?: CampaignStepWhereInput | CampaignStepWhereInput[]
    id?: IntFilter<"CampaignStep"> | number
    sequenceOrder?: IntFilter<"CampaignStep"> | number
    delayDays?: IntFilter<"CampaignStep"> | number
    templateId?: IntFilter<"CampaignStep"> | number
    campaignId?: IntFilter<"CampaignStep"> | number
    createdAt?: DateTimeFilter<"CampaignStep"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignStep"> | Date | string
    sendDays?: StringNullableFilter<"CampaignStep"> | string | null
    sendTimeStart?: StringNullableFilter<"CampaignStep"> | string | null
    sendTimeEnd?: StringNullableFilter<"CampaignStep"> | string | null
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    emailEvents?: EmailEventListRelationFilter
  }

  export type CampaignStepOrderByWithRelationInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    delayDays?: SortOrder
    templateId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sendDays?: SortOrderInput | SortOrder
    sendTimeStart?: SortOrderInput | SortOrder
    sendTimeEnd?: SortOrderInput | SortOrder
    template?: TemplateOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    emailEvents?: EmailEventOrderByRelationAggregateInput
  }

  export type CampaignStepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    campaignId_sequenceOrder?: CampaignStepCampaignIdSequenceOrderCompoundUniqueInput
    AND?: CampaignStepWhereInput | CampaignStepWhereInput[]
    OR?: CampaignStepWhereInput[]
    NOT?: CampaignStepWhereInput | CampaignStepWhereInput[]
    sequenceOrder?: IntFilter<"CampaignStep"> | number
    delayDays?: IntFilter<"CampaignStep"> | number
    templateId?: IntFilter<"CampaignStep"> | number
    campaignId?: IntFilter<"CampaignStep"> | number
    createdAt?: DateTimeFilter<"CampaignStep"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignStep"> | Date | string
    sendDays?: StringNullableFilter<"CampaignStep"> | string | null
    sendTimeStart?: StringNullableFilter<"CampaignStep"> | string | null
    sendTimeEnd?: StringNullableFilter<"CampaignStep"> | string | null
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    emailEvents?: EmailEventListRelationFilter
  }, "id" | "campaignId_sequenceOrder">

  export type CampaignStepOrderByWithAggregationInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    delayDays?: SortOrder
    templateId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sendDays?: SortOrderInput | SortOrder
    sendTimeStart?: SortOrderInput | SortOrder
    sendTimeEnd?: SortOrderInput | SortOrder
    _count?: CampaignStepCountOrderByAggregateInput
    _avg?: CampaignStepAvgOrderByAggregateInput
    _max?: CampaignStepMaxOrderByAggregateInput
    _min?: CampaignStepMinOrderByAggregateInput
    _sum?: CampaignStepSumOrderByAggregateInput
  }

  export type CampaignStepScalarWhereWithAggregatesInput = {
    AND?: CampaignStepScalarWhereWithAggregatesInput | CampaignStepScalarWhereWithAggregatesInput[]
    OR?: CampaignStepScalarWhereWithAggregatesInput[]
    NOT?: CampaignStepScalarWhereWithAggregatesInput | CampaignStepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CampaignStep"> | number
    sequenceOrder?: IntWithAggregatesFilter<"CampaignStep"> | number
    delayDays?: IntWithAggregatesFilter<"CampaignStep"> | number
    templateId?: IntWithAggregatesFilter<"CampaignStep"> | number
    campaignId?: IntWithAggregatesFilter<"CampaignStep"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CampaignStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignStep"> | Date | string
    sendDays?: StringNullableWithAggregatesFilter<"CampaignStep"> | string | null
    sendTimeStart?: StringNullableWithAggregatesFilter<"CampaignStep"> | string | null
    sendTimeEnd?: StringNullableWithAggregatesFilter<"CampaignStep"> | string | null
  }

  export type CampaignClientWhereInput = {
    AND?: CampaignClientWhereInput | CampaignClientWhereInput[]
    OR?: CampaignClientWhereInput[]
    NOT?: CampaignClientWhereInput | CampaignClientWhereInput[]
    campaignId?: IntFilter<"CampaignClient"> | number
    clientId?: IntFilter<"CampaignClient"> | number
    statusInCampaign?: EnumClientCampaignStatusFilter<"CampaignClient"> | $Enums.ClientCampaignStatus
    currentStepOrder?: IntNullableFilter<"CampaignClient"> | number | null
    nextSendTime?: DateTimeNullableFilter<"CampaignClient"> | Date | string | null
    addedAt?: DateTimeFilter<"CampaignClient"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    emailEvents?: EmailEventListRelationFilter
  }

  export type CampaignClientOrderByWithRelationInput = {
    campaignId?: SortOrder
    clientId?: SortOrder
    statusInCampaign?: SortOrder
    currentStepOrder?: SortOrderInput | SortOrder
    nextSendTime?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    emailEvents?: EmailEventOrderByRelationAggregateInput
  }

  export type CampaignClientWhereUniqueInput = Prisma.AtLeast<{
    campaignId_clientId?: CampaignClientCampaignIdClientIdCompoundUniqueInput
    AND?: CampaignClientWhereInput | CampaignClientWhereInput[]
    OR?: CampaignClientWhereInput[]
    NOT?: CampaignClientWhereInput | CampaignClientWhereInput[]
    campaignId?: IntFilter<"CampaignClient"> | number
    clientId?: IntFilter<"CampaignClient"> | number
    statusInCampaign?: EnumClientCampaignStatusFilter<"CampaignClient"> | $Enums.ClientCampaignStatus
    currentStepOrder?: IntNullableFilter<"CampaignClient"> | number | null
    nextSendTime?: DateTimeNullableFilter<"CampaignClient"> | Date | string | null
    addedAt?: DateTimeFilter<"CampaignClient"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    emailEvents?: EmailEventListRelationFilter
  }, "campaignId_clientId">

  export type CampaignClientOrderByWithAggregationInput = {
    campaignId?: SortOrder
    clientId?: SortOrder
    statusInCampaign?: SortOrder
    currentStepOrder?: SortOrderInput | SortOrder
    nextSendTime?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    _count?: CampaignClientCountOrderByAggregateInput
    _avg?: CampaignClientAvgOrderByAggregateInput
    _max?: CampaignClientMaxOrderByAggregateInput
    _min?: CampaignClientMinOrderByAggregateInput
    _sum?: CampaignClientSumOrderByAggregateInput
  }

  export type CampaignClientScalarWhereWithAggregatesInput = {
    AND?: CampaignClientScalarWhereWithAggregatesInput | CampaignClientScalarWhereWithAggregatesInput[]
    OR?: CampaignClientScalarWhereWithAggregatesInput[]
    NOT?: CampaignClientScalarWhereWithAggregatesInput | CampaignClientScalarWhereWithAggregatesInput[]
    campaignId?: IntWithAggregatesFilter<"CampaignClient"> | number
    clientId?: IntWithAggregatesFilter<"CampaignClient"> | number
    statusInCampaign?: EnumClientCampaignStatusWithAggregatesFilter<"CampaignClient"> | $Enums.ClientCampaignStatus
    currentStepOrder?: IntNullableWithAggregatesFilter<"CampaignClient"> | number | null
    nextSendTime?: DateTimeNullableWithAggregatesFilter<"CampaignClient"> | Date | string | null
    addedAt?: DateTimeWithAggregatesFilter<"CampaignClient"> | Date | string
  }

  export type EmailEventWhereInput = {
    AND?: EmailEventWhereInput | EmailEventWhereInput[]
    OR?: EmailEventWhereInput[]
    NOT?: EmailEventWhereInput | EmailEventWhereInput[]
    id?: IntFilter<"EmailEvent"> | number
    type?: EnumEmailEventTypeFilter<"EmailEvent"> | $Enums.EmailEventType
    timestamp?: DateTimeFilter<"EmailEvent"> | Date | string
    campaignId?: IntFilter<"EmailEvent"> | number
    clientId?: IntFilter<"EmailEvent"> | number
    campaignStepId?: IntNullableFilter<"EmailEvent"> | number | null
    campaignClientId?: IntNullableFilter<"EmailEvent"> | number | null
    metadata?: StringNullableFilter<"EmailEvent"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    campaignStep?: XOR<CampaignStepNullableScalarRelationFilter, CampaignStepWhereInput> | null
    campaignClient?: XOR<CampaignClientNullableScalarRelationFilter, CampaignClientWhereInput> | null
  }

  export type EmailEventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    campaignId?: SortOrder
    clientId?: SortOrder
    campaignStepId?: SortOrderInput | SortOrder
    campaignClientId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    campaign?: CampaignOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    campaignStep?: CampaignStepOrderByWithRelationInput
    campaignClient?: CampaignClientOrderByWithRelationInput
  }

  export type EmailEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailEventWhereInput | EmailEventWhereInput[]
    OR?: EmailEventWhereInput[]
    NOT?: EmailEventWhereInput | EmailEventWhereInput[]
    type?: EnumEmailEventTypeFilter<"EmailEvent"> | $Enums.EmailEventType
    timestamp?: DateTimeFilter<"EmailEvent"> | Date | string
    campaignId?: IntFilter<"EmailEvent"> | number
    clientId?: IntFilter<"EmailEvent"> | number
    campaignStepId?: IntNullableFilter<"EmailEvent"> | number | null
    campaignClientId?: IntNullableFilter<"EmailEvent"> | number | null
    metadata?: StringNullableFilter<"EmailEvent"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    campaignStep?: XOR<CampaignStepNullableScalarRelationFilter, CampaignStepWhereInput> | null
    campaignClient?: XOR<CampaignClientNullableScalarRelationFilter, CampaignClientWhereInput> | null
  }, "id">

  export type EmailEventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    campaignId?: SortOrder
    clientId?: SortOrder
    campaignStepId?: SortOrderInput | SortOrder
    campaignClientId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: EmailEventCountOrderByAggregateInput
    _avg?: EmailEventAvgOrderByAggregateInput
    _max?: EmailEventMaxOrderByAggregateInput
    _min?: EmailEventMinOrderByAggregateInput
    _sum?: EmailEventSumOrderByAggregateInput
  }

  export type EmailEventScalarWhereWithAggregatesInput = {
    AND?: EmailEventScalarWhereWithAggregatesInput | EmailEventScalarWhereWithAggregatesInput[]
    OR?: EmailEventScalarWhereWithAggregatesInput[]
    NOT?: EmailEventScalarWhereWithAggregatesInput | EmailEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailEvent"> | number
    type?: EnumEmailEventTypeWithAggregatesFilter<"EmailEvent"> | $Enums.EmailEventType
    timestamp?: DateTimeWithAggregatesFilter<"EmailEvent"> | Date | string
    campaignId?: IntWithAggregatesFilter<"EmailEvent"> | number
    clientId?: IntWithAggregatesFilter<"EmailEvent"> | number
    campaignStepId?: IntNullableWithAggregatesFilter<"EmailEvent"> | number | null
    campaignClientId?: IntNullableWithAggregatesFilter<"EmailEvent"> | number | null
    metadata?: StringNullableWithAggregatesFilter<"EmailEvent"> | string | null
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: IntFilter<"UserPreference"> | number
    userId?: StringFilter<"UserPreference"> | string
    theme?: EnumThemePreferenceFilter<"UserPreference"> | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFilter<"UserPreference"> | $Enums.LayoutDensity
    timezone?: StringFilter<"UserPreference"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    layoutDensity?: SortOrder
    timezone?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    theme?: EnumThemePreferenceFilter<"UserPreference"> | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFilter<"UserPreference"> | $Enums.LayoutDensity
    timezone?: StringFilter<"UserPreference"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    layoutDensity?: SortOrder
    timezone?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _avg?: UserPreferenceAvgOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
    _sum?: UserPreferenceSumOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPreference"> | number
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
    theme?: EnumThemePreferenceWithAggregatesFilter<"UserPreference"> | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityWithAggregatesFilter<"UserPreference"> | $Enums.LayoutDensity
    timezone?: StringWithAggregatesFilter<"UserPreference"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUsersInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    companyId?: number | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUsersNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    companyId?: number | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: number
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: number
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    clients?: ClientCreateNestedManyWithoutCompanyInput
    templates?: TemplateCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    clients?: ClientUncheckedCreateNestedManyWithoutCompanyInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    clients?: ClientUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutClientsInput
    campaigns?: CampaignClientCreateNestedManyWithoutClientInput
    emailEvents?: EmailEventCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignClientUncheckedCreateNestedManyWithoutClientInput
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutClientsNestedInput
    campaigns?: CampaignClientUpdateManyWithoutClientNestedInput
    emailEvents?: EmailEventUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignClientUncheckedUpdateManyWithoutClientNestedInput
    emailEvents?: EmailEventUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    name: string
    subject: string
    bodyHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutTemplatesInput
    createdBy?: UserCreateNestedOneWithoutTemplatesInput
    campaignSteps?: CampaignStepCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: number
    name: string
    subject: string
    bodyHtml: string
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignSteps?: CampaignStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTemplatesNestedInput
    createdBy?: UserUpdateOneWithoutTemplatesNestedInput
    campaignSteps?: CampaignStepUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignSteps?: CampaignStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: number
    name: string
    subject: string
    bodyHtml: string
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    name: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCampaignsInput
    createdBy?: UserCreateNestedOneWithoutCampaignsInput
    steps?: CampaignStepCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: CampaignStepUncheckedCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientUncheckedCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneWithoutCampaignsNestedInput
    steps?: CampaignStepUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: CampaignStepUncheckedUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUncheckedUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignStepCreateInput = {
    sequenceOrder: number
    delayDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
    template: TemplateCreateNestedOneWithoutCampaignStepsInput
    campaign: CampaignCreateNestedOneWithoutStepsInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignStepInput
  }

  export type CampaignStepUncheckedCreateInput = {
    id?: number
    sequenceOrder: number
    delayDays: number
    templateId: number
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignStepInput
  }

  export type CampaignStepUpdateInput = {
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
    template?: TemplateUpdateOneRequiredWithoutCampaignStepsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutStepsNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignStepNestedInput
  }

  export type CampaignStepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignStepNestedInput
  }

  export type CampaignStepCreateManyInput = {
    id?: number
    sequenceOrder: number
    delayDays: number
    templateId: number
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
  }

  export type CampaignStepUpdateManyMutationInput = {
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignStepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignClientCreateInput = {
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutClientsInput
    client: ClientCreateNestedOneWithoutCampaignsInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignClientInput
  }

  export type CampaignClientUncheckedCreateInput = {
    campaignId: number
    clientId: number
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignClientInput
  }

  export type CampaignClientUpdateInput = {
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutClientsNestedInput
    client?: ClientUpdateOneRequiredWithoutCampaignsNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignClientNestedInput
  }

  export type CampaignClientUncheckedUpdateInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignClientNestedInput
  }

  export type CampaignClientCreateManyInput = {
    campaignId: number
    clientId: number
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
  }

  export type CampaignClientUpdateManyMutationInput = {
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignClientUncheckedUpdateManyInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailEventCreateInput = {
    type: $Enums.EmailEventType
    timestamp?: Date | string
    metadata?: string | null
    campaign: CampaignCreateNestedOneWithoutEmailEventsInput
    client: ClientCreateNestedOneWithoutEmailEventsInput
    campaignStep?: CampaignStepCreateNestedOneWithoutEmailEventsInput
    campaignClient?: CampaignClientCreateNestedOneWithoutEmailEventsInput
  }

  export type EmailEventUncheckedCreateInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    campaignId: number
    clientId: number
    campaignStepId?: number | null
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type EmailEventUpdateInput = {
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutEmailEventsNestedInput
    client?: ClientUpdateOneRequiredWithoutEmailEventsNestedInput
    campaignStep?: CampaignStepUpdateOneWithoutEmailEventsNestedInput
    campaignClient?: CampaignClientUpdateOneWithoutEmailEventsNestedInput
  }

  export type EmailEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventCreateManyInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    campaignId: number
    clientId: number
    campaignStepId?: number | null
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type EmailEventUpdateManyMutationInput = {
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferenceCreateInput = {
    theme?: $Enums.ThemePreference
    layoutDensity?: $Enums.LayoutDensity
    timezone?: string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: number
    userId: string
    theme?: $Enums.ThemePreference
    layoutDensity?: $Enums.LayoutDensity
    timezone?: string
  }

  export type UserPreferenceUpdateInput = {
    theme?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFieldUpdateOperationsInput | $Enums.LayoutDensity
    timezone?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    theme?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFieldUpdateOperationsInput | $Enums.LayoutDensity
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: number
    userId: string
    theme?: $Enums.ThemePreference
    layoutDensity?: $Enums.LayoutDensity
    timezone?: string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    theme?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFieldUpdateOperationsInput | $Enums.LayoutDensity
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    theme?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFieldUpdateOperationsInput | $Enums.LayoutDensity
    timezone?: StringFieldUpdateOperationsInput | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type UserPreferenceNullableScalarRelationFilter = {
    is?: UserPreferenceWhereInput | null
    isNot?: UserPreferenceWhereInput | null
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    companyId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    companyId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrder
    planType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrder
    planType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripeCustomerId?: SortOrder
    planType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CampaignClientListRelationFilter = {
    every?: CampaignClientWhereInput
    some?: CampaignClientWhereInput
    none?: CampaignClientWhereInput
  }

  export type EmailEventListRelationFilter = {
    every?: EmailEventWhereInput
    some?: EmailEventWhereInput
    none?: EmailEventWhereInput
  }

  export type CampaignClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCompanyIdEmailCompoundUniqueInput = {
    companyId: number
    email: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CampaignStepListRelationFilter = {
    every?: CampaignStepWhereInput
    some?: CampaignStepWhereInput
    none?: CampaignStepWhereInput
  }

  export type CampaignStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    bodyHtml?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    bodyHtml?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    bodyHtml?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type CampaignStepCampaignIdSequenceOrderCompoundUniqueInput = {
    campaignId: number
    sequenceOrder: number
  }

  export type CampaignStepCountOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    delayDays?: SortOrder
    templateId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sendDays?: SortOrder
    sendTimeStart?: SortOrder
    sendTimeEnd?: SortOrder
  }

  export type CampaignStepAvgOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    delayDays?: SortOrder
    templateId?: SortOrder
    campaignId?: SortOrder
  }

  export type CampaignStepMaxOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    delayDays?: SortOrder
    templateId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sendDays?: SortOrder
    sendTimeStart?: SortOrder
    sendTimeEnd?: SortOrder
  }

  export type CampaignStepMinOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    delayDays?: SortOrder
    templateId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sendDays?: SortOrder
    sendTimeStart?: SortOrder
    sendTimeEnd?: SortOrder
  }

  export type CampaignStepSumOrderByAggregateInput = {
    id?: SortOrder
    sequenceOrder?: SortOrder
    delayDays?: SortOrder
    templateId?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumClientCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientCampaignStatus | EnumClientCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientCampaignStatusFilter<$PrismaModel> | $Enums.ClientCampaignStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type CampaignClientCampaignIdClientIdCompoundUniqueInput = {
    campaignId: number
    clientId: number
  }

  export type CampaignClientCountOrderByAggregateInput = {
    campaignId?: SortOrder
    clientId?: SortOrder
    statusInCampaign?: SortOrder
    currentStepOrder?: SortOrder
    nextSendTime?: SortOrder
    addedAt?: SortOrder
  }

  export type CampaignClientAvgOrderByAggregateInput = {
    campaignId?: SortOrder
    clientId?: SortOrder
    currentStepOrder?: SortOrder
  }

  export type CampaignClientMaxOrderByAggregateInput = {
    campaignId?: SortOrder
    clientId?: SortOrder
    statusInCampaign?: SortOrder
    currentStepOrder?: SortOrder
    nextSendTime?: SortOrder
    addedAt?: SortOrder
  }

  export type CampaignClientMinOrderByAggregateInput = {
    campaignId?: SortOrder
    clientId?: SortOrder
    statusInCampaign?: SortOrder
    currentStepOrder?: SortOrder
    nextSendTime?: SortOrder
    addedAt?: SortOrder
  }

  export type CampaignClientSumOrderByAggregateInput = {
    campaignId?: SortOrder
    clientId?: SortOrder
    currentStepOrder?: SortOrder
  }

  export type EnumClientCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientCampaignStatus | EnumClientCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientCampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumClientCampaignStatusFilter<$PrismaModel>
  }

  export type EnumEmailEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailEventType | EnumEmailEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailEventTypeFilter<$PrismaModel> | $Enums.EmailEventType
  }

  export type CampaignStepNullableScalarRelationFilter = {
    is?: CampaignStepWhereInput | null
    isNot?: CampaignStepWhereInput | null
  }

  export type CampaignClientNullableScalarRelationFilter = {
    is?: CampaignClientWhereInput | null
    isNot?: CampaignClientWhereInput | null
  }

  export type EmailEventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    campaignId?: SortOrder
    clientId?: SortOrder
    campaignStepId?: SortOrder
    campaignClientId?: SortOrder
    metadata?: SortOrder
  }

  export type EmailEventAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    clientId?: SortOrder
    campaignStepId?: SortOrder
    campaignClientId?: SortOrder
  }

  export type EmailEventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    campaignId?: SortOrder
    clientId?: SortOrder
    campaignStepId?: SortOrder
    campaignClientId?: SortOrder
    metadata?: SortOrder
  }

  export type EmailEventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    campaignId?: SortOrder
    clientId?: SortOrder
    campaignStepId?: SortOrder
    campaignClientId?: SortOrder
    metadata?: SortOrder
  }

  export type EmailEventSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    clientId?: SortOrder
    campaignStepId?: SortOrder
    campaignClientId?: SortOrder
  }

  export type EnumEmailEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailEventType | EnumEmailEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailEventTypeFilter<$PrismaModel>
  }

  export type EnumThemePreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumThemePreferenceFilter<$PrismaModel> | $Enums.ThemePreference
  }

  export type EnumLayoutDensityFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutDensity | EnumLayoutDensityFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutDensityFilter<$PrismaModel> | $Enums.LayoutDensity
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    layoutDensity?: SortOrder
    timezone?: SortOrder
  }

  export type UserPreferenceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    layoutDensity?: SortOrder
    timezone?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    layoutDensity?: SortOrder
    timezone?: SortOrder
  }

  export type UserPreferenceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumThemePreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumThemePreferenceWithAggregatesFilter<$PrismaModel> | $Enums.ThemePreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemePreferenceFilter<$PrismaModel>
    _max?: NestedEnumThemePreferenceFilter<$PrismaModel>
  }

  export type EnumLayoutDensityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutDensity | EnumLayoutDensityFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutDensityWithAggregatesFilter<$PrismaModel> | $Enums.LayoutDensity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLayoutDensityFilter<$PrismaModel>
    _max?: NestedEnumLayoutDensityFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserPreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type TemplateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type TemplateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type UserPreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type TemplateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCreatedByInput | TemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCreatedByInput | TemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCreatedByInput | TemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatedByInput | CampaignUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatedByInput | CampaignUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatedByInput | CampaignUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type TemplateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput> | TemplateCreateWithoutCreatedByInput[] | TemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCreatedByInput | TemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCreatedByInput | TemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TemplateCreateManyCreatedByInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCreatedByInput | TemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCreatedByInput | TemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatedByInput | CampaignUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatedByInput | CampaignUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatedByInput | CampaignUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ClientCreateWithoutCompanyInput, ClientUncheckedCreateWithoutCompanyInput> | ClientCreateWithoutCompanyInput[] | ClientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCompanyInput | ClientCreateOrConnectWithoutCompanyInput[]
    createMany?: ClientCreateManyCompanyInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TemplateCreateWithoutCompanyInput, TemplateUncheckedCreateWithoutCompanyInput> | TemplateCreateWithoutCompanyInput[] | TemplateUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCompanyInput | TemplateCreateOrConnectWithoutCompanyInput[]
    createMany?: TemplateCreateManyCompanyInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CampaignCreateWithoutCompanyInput, CampaignUncheckedCreateWithoutCompanyInput> | CampaignCreateWithoutCompanyInput[] | CampaignUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCompanyInput | CampaignCreateOrConnectWithoutCompanyInput[]
    createMany?: CampaignCreateManyCompanyInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ClientCreateWithoutCompanyInput, ClientUncheckedCreateWithoutCompanyInput> | ClientCreateWithoutCompanyInput[] | ClientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCompanyInput | ClientCreateOrConnectWithoutCompanyInput[]
    createMany?: ClientCreateManyCompanyInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TemplateCreateWithoutCompanyInput, TemplateUncheckedCreateWithoutCompanyInput> | TemplateCreateWithoutCompanyInput[] | TemplateUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCompanyInput | TemplateCreateOrConnectWithoutCompanyInput[]
    createMany?: TemplateCreateManyCompanyInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CampaignCreateWithoutCompanyInput, CampaignUncheckedCreateWithoutCompanyInput> | CampaignCreateWithoutCompanyInput[] | CampaignUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCompanyInput | CampaignCreateOrConnectWithoutCompanyInput[]
    createMany?: CampaignCreateManyCompanyInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ClientCreateWithoutCompanyInput, ClientUncheckedCreateWithoutCompanyInput> | ClientCreateWithoutCompanyInput[] | ClientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCompanyInput | ClientCreateOrConnectWithoutCompanyInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCompanyInput | ClientUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ClientCreateManyCompanyInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCompanyInput | ClientUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCompanyInput | ClientUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TemplateCreateWithoutCompanyInput, TemplateUncheckedCreateWithoutCompanyInput> | TemplateCreateWithoutCompanyInput[] | TemplateUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCompanyInput | TemplateCreateOrConnectWithoutCompanyInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCompanyInput | TemplateUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TemplateCreateManyCompanyInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCompanyInput | TemplateUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCompanyInput | TemplateUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CampaignCreateWithoutCompanyInput, CampaignUncheckedCreateWithoutCompanyInput> | CampaignCreateWithoutCompanyInput[] | CampaignUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCompanyInput | CampaignCreateOrConnectWithoutCompanyInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCompanyInput | CampaignUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CampaignCreateManyCompanyInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCompanyInput | CampaignUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCompanyInput | CampaignUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ClientCreateWithoutCompanyInput, ClientUncheckedCreateWithoutCompanyInput> | ClientCreateWithoutCompanyInput[] | ClientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCompanyInput | ClientCreateOrConnectWithoutCompanyInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCompanyInput | ClientUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ClientCreateManyCompanyInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCompanyInput | ClientUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCompanyInput | ClientUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TemplateCreateWithoutCompanyInput, TemplateUncheckedCreateWithoutCompanyInput> | TemplateCreateWithoutCompanyInput[] | TemplateUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutCompanyInput | TemplateCreateOrConnectWithoutCompanyInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutCompanyInput | TemplateUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TemplateCreateManyCompanyInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutCompanyInput | TemplateUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutCompanyInput | TemplateUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CampaignCreateWithoutCompanyInput, CampaignUncheckedCreateWithoutCompanyInput> | CampaignCreateWithoutCompanyInput[] | CampaignUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCompanyInput | CampaignCreateOrConnectWithoutCompanyInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCompanyInput | CampaignUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CampaignCreateManyCompanyInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCompanyInput | CampaignUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCompanyInput | CampaignUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutClientsInput = {
    create?: XOR<CompanyCreateWithoutClientsInput, CompanyUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutClientsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CampaignClientCreateNestedManyWithoutClientInput = {
    create?: XOR<CampaignClientCreateWithoutClientInput, CampaignClientUncheckedCreateWithoutClientInput> | CampaignClientCreateWithoutClientInput[] | CampaignClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutClientInput | CampaignClientCreateOrConnectWithoutClientInput[]
    createMany?: CampaignClientCreateManyClientInputEnvelope
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
  }

  export type EmailEventCreateNestedManyWithoutClientInput = {
    create?: XOR<EmailEventCreateWithoutClientInput, EmailEventUncheckedCreateWithoutClientInput> | EmailEventCreateWithoutClientInput[] | EmailEventUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutClientInput | EmailEventCreateOrConnectWithoutClientInput[]
    createMany?: EmailEventCreateManyClientInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type CampaignClientUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CampaignClientCreateWithoutClientInput, CampaignClientUncheckedCreateWithoutClientInput> | CampaignClientCreateWithoutClientInput[] | CampaignClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutClientInput | CampaignClientCreateOrConnectWithoutClientInput[]
    createMany?: CampaignClientCreateManyClientInputEnvelope
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
  }

  export type EmailEventUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<EmailEventCreateWithoutClientInput, EmailEventUncheckedCreateWithoutClientInput> | EmailEventCreateWithoutClientInput[] | EmailEventUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutClientInput | EmailEventCreateOrConnectWithoutClientInput[]
    createMany?: EmailEventCreateManyClientInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<CompanyCreateWithoutClientsInput, CompanyUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutClientsInput
    upsert?: CompanyUpsertWithoutClientsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutClientsInput, CompanyUpdateWithoutClientsInput>, CompanyUncheckedUpdateWithoutClientsInput>
  }

  export type CampaignClientUpdateManyWithoutClientNestedInput = {
    create?: XOR<CampaignClientCreateWithoutClientInput, CampaignClientUncheckedCreateWithoutClientInput> | CampaignClientCreateWithoutClientInput[] | CampaignClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutClientInput | CampaignClientCreateOrConnectWithoutClientInput[]
    upsert?: CampaignClientUpsertWithWhereUniqueWithoutClientInput | CampaignClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CampaignClientCreateManyClientInputEnvelope
    set?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    disconnect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    delete?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    update?: CampaignClientUpdateWithWhereUniqueWithoutClientInput | CampaignClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CampaignClientUpdateManyWithWhereWithoutClientInput | CampaignClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CampaignClientScalarWhereInput | CampaignClientScalarWhereInput[]
  }

  export type EmailEventUpdateManyWithoutClientNestedInput = {
    create?: XOR<EmailEventCreateWithoutClientInput, EmailEventUncheckedCreateWithoutClientInput> | EmailEventCreateWithoutClientInput[] | EmailEventUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutClientInput | EmailEventCreateOrConnectWithoutClientInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutClientInput | EmailEventUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EmailEventCreateManyClientInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutClientInput | EmailEventUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutClientInput | EmailEventUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type CampaignClientUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CampaignClientCreateWithoutClientInput, CampaignClientUncheckedCreateWithoutClientInput> | CampaignClientCreateWithoutClientInput[] | CampaignClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutClientInput | CampaignClientCreateOrConnectWithoutClientInput[]
    upsert?: CampaignClientUpsertWithWhereUniqueWithoutClientInput | CampaignClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CampaignClientCreateManyClientInputEnvelope
    set?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    disconnect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    delete?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    update?: CampaignClientUpdateWithWhereUniqueWithoutClientInput | CampaignClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CampaignClientUpdateManyWithWhereWithoutClientInput | CampaignClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CampaignClientScalarWhereInput | CampaignClientScalarWhereInput[]
  }

  export type EmailEventUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<EmailEventCreateWithoutClientInput, EmailEventUncheckedCreateWithoutClientInput> | EmailEventCreateWithoutClientInput[] | EmailEventUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutClientInput | EmailEventCreateOrConnectWithoutClientInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutClientInput | EmailEventUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EmailEventCreateManyClientInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutClientInput | EmailEventUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutClientInput | EmailEventUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<CompanyCreateWithoutTemplatesInput, CompanyUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTemplatesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignStepCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CampaignStepCreateWithoutTemplateInput, CampaignStepUncheckedCreateWithoutTemplateInput> | CampaignStepCreateWithoutTemplateInput[] | CampaignStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutTemplateInput | CampaignStepCreateOrConnectWithoutTemplateInput[]
    createMany?: CampaignStepCreateManyTemplateInputEnvelope
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
  }

  export type CampaignStepUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CampaignStepCreateWithoutTemplateInput, CampaignStepUncheckedCreateWithoutTemplateInput> | CampaignStepCreateWithoutTemplateInput[] | CampaignStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutTemplateInput | CampaignStepCreateOrConnectWithoutTemplateInput[]
    createMany?: CampaignStepCreateManyTemplateInputEnvelope
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<CompanyCreateWithoutTemplatesInput, CompanyUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTemplatesInput
    upsert?: CompanyUpsertWithoutTemplatesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTemplatesInput, CompanyUpdateWithoutTemplatesInput>, CompanyUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateOneWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type CampaignStepUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CampaignStepCreateWithoutTemplateInput, CampaignStepUncheckedCreateWithoutTemplateInput> | CampaignStepCreateWithoutTemplateInput[] | CampaignStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutTemplateInput | CampaignStepCreateOrConnectWithoutTemplateInput[]
    upsert?: CampaignStepUpsertWithWhereUniqueWithoutTemplateInput | CampaignStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CampaignStepCreateManyTemplateInputEnvelope
    set?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    disconnect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    delete?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    update?: CampaignStepUpdateWithWhereUniqueWithoutTemplateInput | CampaignStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CampaignStepUpdateManyWithWhereWithoutTemplateInput | CampaignStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CampaignStepScalarWhereInput | CampaignStepScalarWhereInput[]
  }

  export type CampaignStepUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CampaignStepCreateWithoutTemplateInput, CampaignStepUncheckedCreateWithoutTemplateInput> | CampaignStepCreateWithoutTemplateInput[] | CampaignStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutTemplateInput | CampaignStepCreateOrConnectWithoutTemplateInput[]
    upsert?: CampaignStepUpsertWithWhereUniqueWithoutTemplateInput | CampaignStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CampaignStepCreateManyTemplateInputEnvelope
    set?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    disconnect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    delete?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    update?: CampaignStepUpdateWithWhereUniqueWithoutTemplateInput | CampaignStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CampaignStepUpdateManyWithWhereWithoutTemplateInput | CampaignStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CampaignStepScalarWhereInput | CampaignStepScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<CompanyCreateWithoutCampaignsInput, CompanyUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCampaignsInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignStepCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignStepCreateWithoutCampaignInput, CampaignStepUncheckedCreateWithoutCampaignInput> | CampaignStepCreateWithoutCampaignInput[] | CampaignStepUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutCampaignInput | CampaignStepCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignStepCreateManyCampaignInputEnvelope
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
  }

  export type CampaignClientCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignClientCreateWithoutCampaignInput, CampaignClientUncheckedCreateWithoutCampaignInput> | CampaignClientCreateWithoutCampaignInput[] | CampaignClientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutCampaignInput | CampaignClientCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignClientCreateManyCampaignInputEnvelope
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
  }

  export type EmailEventCreateNestedManyWithoutCampaignInput = {
    create?: XOR<EmailEventCreateWithoutCampaignInput, EmailEventUncheckedCreateWithoutCampaignInput> | EmailEventCreateWithoutCampaignInput[] | EmailEventUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignInput | EmailEventCreateOrConnectWithoutCampaignInput[]
    createMany?: EmailEventCreateManyCampaignInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type CampaignStepUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignStepCreateWithoutCampaignInput, CampaignStepUncheckedCreateWithoutCampaignInput> | CampaignStepCreateWithoutCampaignInput[] | CampaignStepUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutCampaignInput | CampaignStepCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignStepCreateManyCampaignInputEnvelope
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
  }

  export type CampaignClientUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignClientCreateWithoutCampaignInput, CampaignClientUncheckedCreateWithoutCampaignInput> | CampaignClientCreateWithoutCampaignInput[] | CampaignClientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutCampaignInput | CampaignClientCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignClientCreateManyCampaignInputEnvelope
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
  }

  export type EmailEventUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<EmailEventCreateWithoutCampaignInput, EmailEventUncheckedCreateWithoutCampaignInput> | EmailEventCreateWithoutCampaignInput[] | EmailEventUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignInput | EmailEventCreateOrConnectWithoutCampaignInput[]
    createMany?: EmailEventCreateManyCampaignInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type CompanyUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<CompanyCreateWithoutCampaignsInput, CompanyUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCampaignsInput
    upsert?: CompanyUpsertWithoutCampaignsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCampaignsInput, CompanyUpdateWithoutCampaignsInput>, CompanyUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateOneWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type CampaignStepUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignStepCreateWithoutCampaignInput, CampaignStepUncheckedCreateWithoutCampaignInput> | CampaignStepCreateWithoutCampaignInput[] | CampaignStepUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutCampaignInput | CampaignStepCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignStepUpsertWithWhereUniqueWithoutCampaignInput | CampaignStepUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignStepCreateManyCampaignInputEnvelope
    set?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    disconnect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    delete?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    update?: CampaignStepUpdateWithWhereUniqueWithoutCampaignInput | CampaignStepUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignStepUpdateManyWithWhereWithoutCampaignInput | CampaignStepUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignStepScalarWhereInput | CampaignStepScalarWhereInput[]
  }

  export type CampaignClientUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignClientCreateWithoutCampaignInput, CampaignClientUncheckedCreateWithoutCampaignInput> | CampaignClientCreateWithoutCampaignInput[] | CampaignClientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutCampaignInput | CampaignClientCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignClientUpsertWithWhereUniqueWithoutCampaignInput | CampaignClientUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignClientCreateManyCampaignInputEnvelope
    set?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    disconnect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    delete?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    update?: CampaignClientUpdateWithWhereUniqueWithoutCampaignInput | CampaignClientUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignClientUpdateManyWithWhereWithoutCampaignInput | CampaignClientUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignClientScalarWhereInput | CampaignClientScalarWhereInput[]
  }

  export type EmailEventUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<EmailEventCreateWithoutCampaignInput, EmailEventUncheckedCreateWithoutCampaignInput> | EmailEventCreateWithoutCampaignInput[] | EmailEventUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignInput | EmailEventCreateOrConnectWithoutCampaignInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutCampaignInput | EmailEventUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: EmailEventCreateManyCampaignInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutCampaignInput | EmailEventUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutCampaignInput | EmailEventUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type CampaignStepUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignStepCreateWithoutCampaignInput, CampaignStepUncheckedCreateWithoutCampaignInput> | CampaignStepCreateWithoutCampaignInput[] | CampaignStepUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignStepCreateOrConnectWithoutCampaignInput | CampaignStepCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignStepUpsertWithWhereUniqueWithoutCampaignInput | CampaignStepUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignStepCreateManyCampaignInputEnvelope
    set?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    disconnect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    delete?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    connect?: CampaignStepWhereUniqueInput | CampaignStepWhereUniqueInput[]
    update?: CampaignStepUpdateWithWhereUniqueWithoutCampaignInput | CampaignStepUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignStepUpdateManyWithWhereWithoutCampaignInput | CampaignStepUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignStepScalarWhereInput | CampaignStepScalarWhereInput[]
  }

  export type CampaignClientUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignClientCreateWithoutCampaignInput, CampaignClientUncheckedCreateWithoutCampaignInput> | CampaignClientCreateWithoutCampaignInput[] | CampaignClientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignClientCreateOrConnectWithoutCampaignInput | CampaignClientCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignClientUpsertWithWhereUniqueWithoutCampaignInput | CampaignClientUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignClientCreateManyCampaignInputEnvelope
    set?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    disconnect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    delete?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    connect?: CampaignClientWhereUniqueInput | CampaignClientWhereUniqueInput[]
    update?: CampaignClientUpdateWithWhereUniqueWithoutCampaignInput | CampaignClientUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignClientUpdateManyWithWhereWithoutCampaignInput | CampaignClientUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignClientScalarWhereInput | CampaignClientScalarWhereInput[]
  }

  export type EmailEventUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<EmailEventCreateWithoutCampaignInput, EmailEventUncheckedCreateWithoutCampaignInput> | EmailEventCreateWithoutCampaignInput[] | EmailEventUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignInput | EmailEventCreateOrConnectWithoutCampaignInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutCampaignInput | EmailEventUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: EmailEventCreateManyCampaignInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutCampaignInput | EmailEventUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutCampaignInput | EmailEventUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutCampaignStepsInput = {
    create?: XOR<TemplateCreateWithoutCampaignStepsInput, TemplateUncheckedCreateWithoutCampaignStepsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutCampaignStepsInput
    connect?: TemplateWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutStepsInput = {
    create?: XOR<CampaignCreateWithoutStepsInput, CampaignUncheckedCreateWithoutStepsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutStepsInput
    connect?: CampaignWhereUniqueInput
  }

  export type EmailEventCreateNestedManyWithoutCampaignStepInput = {
    create?: XOR<EmailEventCreateWithoutCampaignStepInput, EmailEventUncheckedCreateWithoutCampaignStepInput> | EmailEventCreateWithoutCampaignStepInput[] | EmailEventUncheckedCreateWithoutCampaignStepInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignStepInput | EmailEventCreateOrConnectWithoutCampaignStepInput[]
    createMany?: EmailEventCreateManyCampaignStepInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type EmailEventUncheckedCreateNestedManyWithoutCampaignStepInput = {
    create?: XOR<EmailEventCreateWithoutCampaignStepInput, EmailEventUncheckedCreateWithoutCampaignStepInput> | EmailEventCreateWithoutCampaignStepInput[] | EmailEventUncheckedCreateWithoutCampaignStepInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignStepInput | EmailEventCreateOrConnectWithoutCampaignStepInput[]
    createMany?: EmailEventCreateManyCampaignStepInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type TemplateUpdateOneRequiredWithoutCampaignStepsNestedInput = {
    create?: XOR<TemplateCreateWithoutCampaignStepsInput, TemplateUncheckedCreateWithoutCampaignStepsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutCampaignStepsInput
    upsert?: TemplateUpsertWithoutCampaignStepsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutCampaignStepsInput, TemplateUpdateWithoutCampaignStepsInput>, TemplateUncheckedUpdateWithoutCampaignStepsInput>
  }

  export type CampaignUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<CampaignCreateWithoutStepsInput, CampaignUncheckedCreateWithoutStepsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutStepsInput
    upsert?: CampaignUpsertWithoutStepsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutStepsInput, CampaignUpdateWithoutStepsInput>, CampaignUncheckedUpdateWithoutStepsInput>
  }

  export type EmailEventUpdateManyWithoutCampaignStepNestedInput = {
    create?: XOR<EmailEventCreateWithoutCampaignStepInput, EmailEventUncheckedCreateWithoutCampaignStepInput> | EmailEventCreateWithoutCampaignStepInput[] | EmailEventUncheckedCreateWithoutCampaignStepInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignStepInput | EmailEventCreateOrConnectWithoutCampaignStepInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutCampaignStepInput | EmailEventUpsertWithWhereUniqueWithoutCampaignStepInput[]
    createMany?: EmailEventCreateManyCampaignStepInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutCampaignStepInput | EmailEventUpdateWithWhereUniqueWithoutCampaignStepInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutCampaignStepInput | EmailEventUpdateManyWithWhereWithoutCampaignStepInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type EmailEventUncheckedUpdateManyWithoutCampaignStepNestedInput = {
    create?: XOR<EmailEventCreateWithoutCampaignStepInput, EmailEventUncheckedCreateWithoutCampaignStepInput> | EmailEventCreateWithoutCampaignStepInput[] | EmailEventUncheckedCreateWithoutCampaignStepInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignStepInput | EmailEventCreateOrConnectWithoutCampaignStepInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutCampaignStepInput | EmailEventUpsertWithWhereUniqueWithoutCampaignStepInput[]
    createMany?: EmailEventCreateManyCampaignStepInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutCampaignStepInput | EmailEventUpdateWithWhereUniqueWithoutCampaignStepInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutCampaignStepInput | EmailEventUpdateManyWithWhereWithoutCampaignStepInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutClientsInput = {
    create?: XOR<CampaignCreateWithoutClientsInput, CampaignUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutClientsInput
    connect?: CampaignWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<ClientCreateWithoutCampaignsInput, ClientUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCampaignsInput
    connect?: ClientWhereUniqueInput
  }

  export type EmailEventCreateNestedManyWithoutCampaignClientInput = {
    create?: XOR<EmailEventCreateWithoutCampaignClientInput, EmailEventUncheckedCreateWithoutCampaignClientInput> | EmailEventCreateWithoutCampaignClientInput[] | EmailEventUncheckedCreateWithoutCampaignClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignClientInput | EmailEventCreateOrConnectWithoutCampaignClientInput[]
    createMany?: EmailEventCreateManyCampaignClientInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type EmailEventUncheckedCreateNestedManyWithoutCampaignClientInput = {
    create?: XOR<EmailEventCreateWithoutCampaignClientInput, EmailEventUncheckedCreateWithoutCampaignClientInput> | EmailEventCreateWithoutCampaignClientInput[] | EmailEventUncheckedCreateWithoutCampaignClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignClientInput | EmailEventCreateOrConnectWithoutCampaignClientInput[]
    createMany?: EmailEventCreateManyCampaignClientInputEnvelope
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
  }

  export type EnumClientCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClientCampaignStatus
  }

  export type CampaignUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<CampaignCreateWithoutClientsInput, CampaignUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutClientsInput
    upsert?: CampaignUpsertWithoutClientsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutClientsInput, CampaignUpdateWithoutClientsInput>, CampaignUncheckedUpdateWithoutClientsInput>
  }

  export type ClientUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<ClientCreateWithoutCampaignsInput, ClientUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCampaignsInput
    upsert?: ClientUpsertWithoutCampaignsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutCampaignsInput, ClientUpdateWithoutCampaignsInput>, ClientUncheckedUpdateWithoutCampaignsInput>
  }

  export type EmailEventUpdateManyWithoutCampaignClientNestedInput = {
    create?: XOR<EmailEventCreateWithoutCampaignClientInput, EmailEventUncheckedCreateWithoutCampaignClientInput> | EmailEventCreateWithoutCampaignClientInput[] | EmailEventUncheckedCreateWithoutCampaignClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignClientInput | EmailEventCreateOrConnectWithoutCampaignClientInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutCampaignClientInput | EmailEventUpsertWithWhereUniqueWithoutCampaignClientInput[]
    createMany?: EmailEventCreateManyCampaignClientInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutCampaignClientInput | EmailEventUpdateWithWhereUniqueWithoutCampaignClientInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutCampaignClientInput | EmailEventUpdateManyWithWhereWithoutCampaignClientInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type EmailEventUncheckedUpdateManyWithoutCampaignClientNestedInput = {
    create?: XOR<EmailEventCreateWithoutCampaignClientInput, EmailEventUncheckedCreateWithoutCampaignClientInput> | EmailEventCreateWithoutCampaignClientInput[] | EmailEventUncheckedCreateWithoutCampaignClientInput[]
    connectOrCreate?: EmailEventCreateOrConnectWithoutCampaignClientInput | EmailEventCreateOrConnectWithoutCampaignClientInput[]
    upsert?: EmailEventUpsertWithWhereUniqueWithoutCampaignClientInput | EmailEventUpsertWithWhereUniqueWithoutCampaignClientInput[]
    createMany?: EmailEventCreateManyCampaignClientInputEnvelope
    set?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    disconnect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    delete?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    connect?: EmailEventWhereUniqueInput | EmailEventWhereUniqueInput[]
    update?: EmailEventUpdateWithWhereUniqueWithoutCampaignClientInput | EmailEventUpdateWithWhereUniqueWithoutCampaignClientInput[]
    updateMany?: EmailEventUpdateManyWithWhereWithoutCampaignClientInput | EmailEventUpdateManyWithWhereWithoutCampaignClientInput[]
    deleteMany?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutEmailEventsInput = {
    create?: XOR<CampaignCreateWithoutEmailEventsInput, CampaignUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutEmailEventsInput
    connect?: CampaignWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutEmailEventsInput = {
    create?: XOR<ClientCreateWithoutEmailEventsInput, ClientUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEmailEventsInput
    connect?: ClientWhereUniqueInput
  }

  export type CampaignStepCreateNestedOneWithoutEmailEventsInput = {
    create?: XOR<CampaignStepCreateWithoutEmailEventsInput, CampaignStepUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: CampaignStepCreateOrConnectWithoutEmailEventsInput
    connect?: CampaignStepWhereUniqueInput
  }

  export type CampaignClientCreateNestedOneWithoutEmailEventsInput = {
    create?: XOR<CampaignClientCreateWithoutEmailEventsInput, CampaignClientUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: CampaignClientCreateOrConnectWithoutEmailEventsInput
    connect?: CampaignClientWhereUniqueInput
  }

  export type EnumEmailEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmailEventType
  }

  export type CampaignUpdateOneRequiredWithoutEmailEventsNestedInput = {
    create?: XOR<CampaignCreateWithoutEmailEventsInput, CampaignUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutEmailEventsInput
    upsert?: CampaignUpsertWithoutEmailEventsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutEmailEventsInput, CampaignUpdateWithoutEmailEventsInput>, CampaignUncheckedUpdateWithoutEmailEventsInput>
  }

  export type ClientUpdateOneRequiredWithoutEmailEventsNestedInput = {
    create?: XOR<ClientCreateWithoutEmailEventsInput, ClientUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEmailEventsInput
    upsert?: ClientUpsertWithoutEmailEventsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutEmailEventsInput, ClientUpdateWithoutEmailEventsInput>, ClientUncheckedUpdateWithoutEmailEventsInput>
  }

  export type CampaignStepUpdateOneWithoutEmailEventsNestedInput = {
    create?: XOR<CampaignStepCreateWithoutEmailEventsInput, CampaignStepUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: CampaignStepCreateOrConnectWithoutEmailEventsInput
    upsert?: CampaignStepUpsertWithoutEmailEventsInput
    disconnect?: CampaignStepWhereInput | boolean
    delete?: CampaignStepWhereInput | boolean
    connect?: CampaignStepWhereUniqueInput
    update?: XOR<XOR<CampaignStepUpdateToOneWithWhereWithoutEmailEventsInput, CampaignStepUpdateWithoutEmailEventsInput>, CampaignStepUncheckedUpdateWithoutEmailEventsInput>
  }

  export type CampaignClientUpdateOneWithoutEmailEventsNestedInput = {
    create?: XOR<CampaignClientCreateWithoutEmailEventsInput, CampaignClientUncheckedCreateWithoutEmailEventsInput>
    connectOrCreate?: CampaignClientCreateOrConnectWithoutEmailEventsInput
    upsert?: CampaignClientUpsertWithoutEmailEventsInput
    disconnect?: CampaignClientWhereInput | boolean
    delete?: CampaignClientWhereInput | boolean
    connect?: CampaignClientWhereUniqueInput
    update?: XOR<XOR<CampaignClientUpdateToOneWithWhereWithoutEmailEventsInput, CampaignClientUpdateWithoutEmailEventsInput>, CampaignClientUncheckedUpdateWithoutEmailEventsInput>
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumThemePreferenceFieldUpdateOperationsInput = {
    set?: $Enums.ThemePreference
  }

  export type EnumLayoutDensityFieldUpdateOperationsInput = {
    set?: $Enums.LayoutDensity
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumClientCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientCampaignStatus | EnumClientCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientCampaignStatusFilter<$PrismaModel> | $Enums.ClientCampaignStatus
  }

  export type NestedEnumClientCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientCampaignStatus | EnumClientCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientCampaignStatus[] | ListEnumClientCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientCampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumClientCampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumEmailEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailEventType | EnumEmailEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailEventTypeFilter<$PrismaModel> | $Enums.EmailEventType
  }

  export type NestedEnumEmailEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailEventType | EnumEmailEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailEventType[] | ListEnumEmailEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumThemePreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumThemePreferenceFilter<$PrismaModel> | $Enums.ThemePreference
  }

  export type NestedEnumLayoutDensityFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutDensity | EnumLayoutDensityFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutDensityFilter<$PrismaModel> | $Enums.LayoutDensity
  }

  export type NestedEnumThemePreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ThemePreference[] | ListEnumThemePreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumThemePreferenceWithAggregatesFilter<$PrismaModel> | $Enums.ThemePreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemePreferenceFilter<$PrismaModel>
    _max?: NestedEnumThemePreferenceFilter<$PrismaModel>
  }

  export type NestedEnumLayoutDensityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutDensity | EnumLayoutDensityFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutDensity[] | ListEnumLayoutDensityFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutDensityWithAggregatesFilter<$PrismaModel> | $Enums.LayoutDensity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLayoutDensityFilter<$PrismaModel>
    _max?: NestedEnumLayoutDensityFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutUsersInput = {
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutCompanyInput
    templates?: TemplateCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutCompanyInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type UserPreferenceCreateWithoutUserInput = {
    theme?: $Enums.ThemePreference
    layoutDensity?: $Enums.LayoutDensity
    timezone?: string
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: number
    theme?: $Enums.ThemePreference
    layoutDensity?: $Enums.LayoutDensity
    timezone?: string
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type TemplateCreateWithoutCreatedByInput = {
    name: string
    subject: string
    bodyHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutTemplatesInput
    campaignSteps?: CampaignStepCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    subject: string
    bodyHtml: string
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignSteps?: CampaignStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TemplateCreateManyCreatedByInputEnvelope = {
    data: TemplateCreateManyCreatedByInput | TemplateCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutCreatedByInput = {
    name: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCampaignsInput
    steps?: CampaignStepCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: CampaignStepUncheckedCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientUncheckedCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput>
  }

  export type CampaignCreateManyCreatedByInputEnvelope = {
    data: CampaignCreateManyCreatedByInput | CampaignCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserPreferenceUpsertWithoutUserInput = {
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    where?: UserPreferenceWhereInput
  }

  export type UserPreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferenceWhereInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    theme?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFieldUpdateOperationsInput | $Enums.LayoutDensity
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    layoutDensity?: EnumLayoutDensityFieldUpdateOperationsInput | $Enums.LayoutDensity
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutCreatedByInput, TemplateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TemplateCreateWithoutCreatedByInput, TemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutCreatedByInput, TemplateUncheckedUpdateWithoutCreatedByInput>
  }

  export type TemplateUpdateManyWithWhereWithoutCreatedByInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
    subject?: StringFilter<"Template"> | string
    bodyHtml?: StringFilter<"Template"> | string
    companyId?: IntFilter<"Template"> | number
    createdById?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCreatedByInput, CampaignUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCreatedByInput, CampaignUncheckedUpdateWithoutCreatedByInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCreatedByInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: IntFilter<"Campaign"> | number
    name?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    companyId?: IntFilter<"Campaign"> | number
    createdById?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUsersInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    companyId?: number | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUsersNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUsersInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    companyId?: number | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUsersNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutCompanyInput = {
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignClientCreateNestedManyWithoutClientInput
    emailEvents?: EmailEventCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCompanyInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignClientUncheckedCreateNestedManyWithoutClientInput
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCompanyInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCompanyInput, ClientUncheckedCreateWithoutCompanyInput>
  }

  export type ClientCreateManyCompanyInputEnvelope = {
    data: ClientCreateManyCompanyInput | ClientCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutCompanyInput = {
    name: string
    subject: string
    bodyHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutTemplatesInput
    campaignSteps?: CampaignStepCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    subject: string
    bodyHtml: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignSteps?: CampaignStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutCompanyInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutCompanyInput, TemplateUncheckedCreateWithoutCompanyInput>
  }

  export type TemplateCreateManyCompanyInputEnvelope = {
    data: TemplateCreateManyCompanyInput | TemplateCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutCompanyInput = {
    name: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCampaignsInput
    steps?: CampaignStepCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: CampaignStepUncheckedCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientUncheckedCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCompanyInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCompanyInput, CampaignUncheckedCreateWithoutCompanyInput>
  }

  export type CampaignCreateManyCompanyInputEnvelope = {
    data: CampaignCreateManyCompanyInput | CampaignCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    companyId?: IntNullableFilter<"User"> | number | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ClientUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutCompanyInput, ClientUncheckedUpdateWithoutCompanyInput>
    create: XOR<ClientCreateWithoutCompanyInput, ClientUncheckedCreateWithoutCompanyInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutCompanyInput, ClientUncheckedUpdateWithoutCompanyInput>
  }

  export type ClientUpdateManyWithWhereWithoutCompanyInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: IntFilter<"Client"> | number
    email?: StringFilter<"Client"> | string
    firstName?: StringNullableFilter<"Client"> | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    companyId?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutCompanyInput, TemplateUncheckedUpdateWithoutCompanyInput>
    create: XOR<TemplateCreateWithoutCompanyInput, TemplateUncheckedCreateWithoutCompanyInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutCompanyInput, TemplateUncheckedUpdateWithoutCompanyInput>
  }

  export type TemplateUpdateManyWithWhereWithoutCompanyInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CampaignUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCompanyInput, CampaignUncheckedUpdateWithoutCompanyInput>
    create: XOR<CampaignCreateWithoutCompanyInput, CampaignUncheckedCreateWithoutCompanyInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCompanyInput, CampaignUncheckedUpdateWithoutCompanyInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCompanyInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyCreateWithoutClientsInput = {
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    templates?: TemplateCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutClientsInput = {
    id?: number
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutClientsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutClientsInput, CompanyUncheckedCreateWithoutClientsInput>
  }

  export type CampaignClientCreateWithoutClientInput = {
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutClientsInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignClientInput
  }

  export type CampaignClientUncheckedCreateWithoutClientInput = {
    campaignId: number
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignClientInput
  }

  export type CampaignClientCreateOrConnectWithoutClientInput = {
    where: CampaignClientWhereUniqueInput
    create: XOR<CampaignClientCreateWithoutClientInput, CampaignClientUncheckedCreateWithoutClientInput>
  }

  export type CampaignClientCreateManyClientInputEnvelope = {
    data: CampaignClientCreateManyClientInput | CampaignClientCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type EmailEventCreateWithoutClientInput = {
    type: $Enums.EmailEventType
    timestamp?: Date | string
    metadata?: string | null
    campaign: CampaignCreateNestedOneWithoutEmailEventsInput
    campaignStep?: CampaignStepCreateNestedOneWithoutEmailEventsInput
    campaignClient?: CampaignClientCreateNestedOneWithoutEmailEventsInput
  }

  export type EmailEventUncheckedCreateWithoutClientInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    campaignId: number
    campaignStepId?: number | null
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type EmailEventCreateOrConnectWithoutClientInput = {
    where: EmailEventWhereUniqueInput
    create: XOR<EmailEventCreateWithoutClientInput, EmailEventUncheckedCreateWithoutClientInput>
  }

  export type EmailEventCreateManyClientInputEnvelope = {
    data: EmailEventCreateManyClientInput | EmailEventCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutClientsInput = {
    update: XOR<CompanyUpdateWithoutClientsInput, CompanyUncheckedUpdateWithoutClientsInput>
    create: XOR<CompanyCreateWithoutClientsInput, CompanyUncheckedCreateWithoutClientsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutClientsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutClientsInput, CompanyUncheckedUpdateWithoutClientsInput>
  }

  export type CompanyUpdateWithoutClientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CampaignClientUpsertWithWhereUniqueWithoutClientInput = {
    where: CampaignClientWhereUniqueInput
    update: XOR<CampaignClientUpdateWithoutClientInput, CampaignClientUncheckedUpdateWithoutClientInput>
    create: XOR<CampaignClientCreateWithoutClientInput, CampaignClientUncheckedCreateWithoutClientInput>
  }

  export type CampaignClientUpdateWithWhereUniqueWithoutClientInput = {
    where: CampaignClientWhereUniqueInput
    data: XOR<CampaignClientUpdateWithoutClientInput, CampaignClientUncheckedUpdateWithoutClientInput>
  }

  export type CampaignClientUpdateManyWithWhereWithoutClientInput = {
    where: CampaignClientScalarWhereInput
    data: XOR<CampaignClientUpdateManyMutationInput, CampaignClientUncheckedUpdateManyWithoutClientInput>
  }

  export type CampaignClientScalarWhereInput = {
    AND?: CampaignClientScalarWhereInput | CampaignClientScalarWhereInput[]
    OR?: CampaignClientScalarWhereInput[]
    NOT?: CampaignClientScalarWhereInput | CampaignClientScalarWhereInput[]
    campaignId?: IntFilter<"CampaignClient"> | number
    clientId?: IntFilter<"CampaignClient"> | number
    statusInCampaign?: EnumClientCampaignStatusFilter<"CampaignClient"> | $Enums.ClientCampaignStatus
    currentStepOrder?: IntNullableFilter<"CampaignClient"> | number | null
    nextSendTime?: DateTimeNullableFilter<"CampaignClient"> | Date | string | null
    addedAt?: DateTimeFilter<"CampaignClient"> | Date | string
  }

  export type EmailEventUpsertWithWhereUniqueWithoutClientInput = {
    where: EmailEventWhereUniqueInput
    update: XOR<EmailEventUpdateWithoutClientInput, EmailEventUncheckedUpdateWithoutClientInput>
    create: XOR<EmailEventCreateWithoutClientInput, EmailEventUncheckedCreateWithoutClientInput>
  }

  export type EmailEventUpdateWithWhereUniqueWithoutClientInput = {
    where: EmailEventWhereUniqueInput
    data: XOR<EmailEventUpdateWithoutClientInput, EmailEventUncheckedUpdateWithoutClientInput>
  }

  export type EmailEventUpdateManyWithWhereWithoutClientInput = {
    where: EmailEventScalarWhereInput
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyWithoutClientInput>
  }

  export type EmailEventScalarWhereInput = {
    AND?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
    OR?: EmailEventScalarWhereInput[]
    NOT?: EmailEventScalarWhereInput | EmailEventScalarWhereInput[]
    id?: IntFilter<"EmailEvent"> | number
    type?: EnumEmailEventTypeFilter<"EmailEvent"> | $Enums.EmailEventType
    timestamp?: DateTimeFilter<"EmailEvent"> | Date | string
    campaignId?: IntFilter<"EmailEvent"> | number
    clientId?: IntFilter<"EmailEvent"> | number
    campaignStepId?: IntNullableFilter<"EmailEvent"> | number | null
    campaignClientId?: IntNullableFilter<"EmailEvent"> | number | null
    metadata?: StringNullableFilter<"EmailEvent"> | string | null
  }

  export type CompanyCreateWithoutTemplatesInput = {
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    clients?: ClientCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTemplatesInput = {
    id?: number
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    clients?: ClientUncheckedCreateNestedManyWithoutCompanyInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTemplatesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTemplatesInput, CompanyUncheckedCreateWithoutTemplatesInput>
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUsersInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    companyId?: number | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type CampaignStepCreateWithoutTemplateInput = {
    sequenceOrder: number
    delayDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
    campaign: CampaignCreateNestedOneWithoutStepsInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignStepInput
  }

  export type CampaignStepUncheckedCreateWithoutTemplateInput = {
    id?: number
    sequenceOrder: number
    delayDays: number
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignStepInput
  }

  export type CampaignStepCreateOrConnectWithoutTemplateInput = {
    where: CampaignStepWhereUniqueInput
    create: XOR<CampaignStepCreateWithoutTemplateInput, CampaignStepUncheckedCreateWithoutTemplateInput>
  }

  export type CampaignStepCreateManyTemplateInputEnvelope = {
    data: CampaignStepCreateManyTemplateInput | CampaignStepCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutTemplatesInput = {
    update: XOR<CompanyUpdateWithoutTemplatesInput, CompanyUncheckedUpdateWithoutTemplatesInput>
    create: XOR<CompanyCreateWithoutTemplatesInput, CompanyUncheckedCreateWithoutTemplatesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTemplatesInput, CompanyUncheckedUpdateWithoutTemplatesInput>
  }

  export type CompanyUpdateWithoutTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    clients?: ClientUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCompanyNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUsersNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CampaignStepUpsertWithWhereUniqueWithoutTemplateInput = {
    where: CampaignStepWhereUniqueInput
    update: XOR<CampaignStepUpdateWithoutTemplateInput, CampaignStepUncheckedUpdateWithoutTemplateInput>
    create: XOR<CampaignStepCreateWithoutTemplateInput, CampaignStepUncheckedCreateWithoutTemplateInput>
  }

  export type CampaignStepUpdateWithWhereUniqueWithoutTemplateInput = {
    where: CampaignStepWhereUniqueInput
    data: XOR<CampaignStepUpdateWithoutTemplateInput, CampaignStepUncheckedUpdateWithoutTemplateInput>
  }

  export type CampaignStepUpdateManyWithWhereWithoutTemplateInput = {
    where: CampaignStepScalarWhereInput
    data: XOR<CampaignStepUpdateManyMutationInput, CampaignStepUncheckedUpdateManyWithoutTemplateInput>
  }

  export type CampaignStepScalarWhereInput = {
    AND?: CampaignStepScalarWhereInput | CampaignStepScalarWhereInput[]
    OR?: CampaignStepScalarWhereInput[]
    NOT?: CampaignStepScalarWhereInput | CampaignStepScalarWhereInput[]
    id?: IntFilter<"CampaignStep"> | number
    sequenceOrder?: IntFilter<"CampaignStep"> | number
    delayDays?: IntFilter<"CampaignStep"> | number
    templateId?: IntFilter<"CampaignStep"> | number
    campaignId?: IntFilter<"CampaignStep"> | number
    createdAt?: DateTimeFilter<"CampaignStep"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignStep"> | Date | string
    sendDays?: StringNullableFilter<"CampaignStep"> | string | null
    sendTimeStart?: StringNullableFilter<"CampaignStep"> | string | null
    sendTimeEnd?: StringNullableFilter<"CampaignStep"> | string | null
  }

  export type CompanyCreateWithoutCampaignsInput = {
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    clients?: ClientCreateNestedManyWithoutCompanyInput
    templates?: TemplateCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCampaignsInput = {
    id?: number
    name: string
    stripeCustomerId?: string | null
    planType?: $Enums.PlanType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    clients?: ClientUncheckedCreateNestedManyWithoutCompanyInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCampaignsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCampaignsInput, CompanyUncheckedCreateWithoutCampaignsInput>
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUsersInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    companyId?: number | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignStepCreateWithoutCampaignInput = {
    sequenceOrder: number
    delayDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
    template: TemplateCreateNestedOneWithoutCampaignStepsInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignStepInput
  }

  export type CampaignStepUncheckedCreateWithoutCampaignInput = {
    id?: number
    sequenceOrder: number
    delayDays: number
    templateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignStepInput
  }

  export type CampaignStepCreateOrConnectWithoutCampaignInput = {
    where: CampaignStepWhereUniqueInput
    create: XOR<CampaignStepCreateWithoutCampaignInput, CampaignStepUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignStepCreateManyCampaignInputEnvelope = {
    data: CampaignStepCreateManyCampaignInput | CampaignStepCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CampaignClientCreateWithoutCampaignInput = {
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
    client: ClientCreateNestedOneWithoutCampaignsInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignClientInput
  }

  export type CampaignClientUncheckedCreateWithoutCampaignInput = {
    clientId: number
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignClientInput
  }

  export type CampaignClientCreateOrConnectWithoutCampaignInput = {
    where: CampaignClientWhereUniqueInput
    create: XOR<CampaignClientCreateWithoutCampaignInput, CampaignClientUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignClientCreateManyCampaignInputEnvelope = {
    data: CampaignClientCreateManyCampaignInput | CampaignClientCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type EmailEventCreateWithoutCampaignInput = {
    type: $Enums.EmailEventType
    timestamp?: Date | string
    metadata?: string | null
    client: ClientCreateNestedOneWithoutEmailEventsInput
    campaignStep?: CampaignStepCreateNestedOneWithoutEmailEventsInput
    campaignClient?: CampaignClientCreateNestedOneWithoutEmailEventsInput
  }

  export type EmailEventUncheckedCreateWithoutCampaignInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    clientId: number
    campaignStepId?: number | null
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type EmailEventCreateOrConnectWithoutCampaignInput = {
    where: EmailEventWhereUniqueInput
    create: XOR<EmailEventCreateWithoutCampaignInput, EmailEventUncheckedCreateWithoutCampaignInput>
  }

  export type EmailEventCreateManyCampaignInputEnvelope = {
    data: EmailEventCreateManyCampaignInput | EmailEventCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutCampaignsInput = {
    update: XOR<CompanyUpdateWithoutCampaignsInput, CompanyUncheckedUpdateWithoutCampaignsInput>
    create: XOR<CompanyCreateWithoutCampaignsInput, CompanyUncheckedCreateWithoutCampaignsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCampaignsInput, CompanyUncheckedUpdateWithoutCampaignsInput>
  }

  export type CompanyUpdateWithoutCampaignsInput = {
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    clients?: ClientUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCompanyNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUsersNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CampaignStepUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignStepWhereUniqueInput
    update: XOR<CampaignStepUpdateWithoutCampaignInput, CampaignStepUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignStepCreateWithoutCampaignInput, CampaignStepUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignStepUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignStepWhereUniqueInput
    data: XOR<CampaignStepUpdateWithoutCampaignInput, CampaignStepUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignStepUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignStepScalarWhereInput
    data: XOR<CampaignStepUpdateManyMutationInput, CampaignStepUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignClientUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignClientWhereUniqueInput
    update: XOR<CampaignClientUpdateWithoutCampaignInput, CampaignClientUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignClientCreateWithoutCampaignInput, CampaignClientUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignClientUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignClientWhereUniqueInput
    data: XOR<CampaignClientUpdateWithoutCampaignInput, CampaignClientUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignClientUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignClientScalarWhereInput
    data: XOR<CampaignClientUpdateManyMutationInput, CampaignClientUncheckedUpdateManyWithoutCampaignInput>
  }

  export type EmailEventUpsertWithWhereUniqueWithoutCampaignInput = {
    where: EmailEventWhereUniqueInput
    update: XOR<EmailEventUpdateWithoutCampaignInput, EmailEventUncheckedUpdateWithoutCampaignInput>
    create: XOR<EmailEventCreateWithoutCampaignInput, EmailEventUncheckedCreateWithoutCampaignInput>
  }

  export type EmailEventUpdateWithWhereUniqueWithoutCampaignInput = {
    where: EmailEventWhereUniqueInput
    data: XOR<EmailEventUpdateWithoutCampaignInput, EmailEventUncheckedUpdateWithoutCampaignInput>
  }

  export type EmailEventUpdateManyWithWhereWithoutCampaignInput = {
    where: EmailEventScalarWhereInput
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyWithoutCampaignInput>
  }

  export type TemplateCreateWithoutCampaignStepsInput = {
    name: string
    subject: string
    bodyHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutTemplatesInput
    createdBy?: UserCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutCampaignStepsInput = {
    id?: number
    name: string
    subject: string
    bodyHtml: string
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutCampaignStepsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutCampaignStepsInput, TemplateUncheckedCreateWithoutCampaignStepsInput>
  }

  export type CampaignCreateWithoutStepsInput = {
    name: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCampaignsInput
    createdBy?: UserCreateNestedOneWithoutCampaignsInput
    clients?: CampaignClientCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutStepsInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: CampaignClientUncheckedCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutStepsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutStepsInput, CampaignUncheckedCreateWithoutStepsInput>
  }

  export type EmailEventCreateWithoutCampaignStepInput = {
    type: $Enums.EmailEventType
    timestamp?: Date | string
    metadata?: string | null
    campaign: CampaignCreateNestedOneWithoutEmailEventsInput
    client: ClientCreateNestedOneWithoutEmailEventsInput
    campaignClient?: CampaignClientCreateNestedOneWithoutEmailEventsInput
  }

  export type EmailEventUncheckedCreateWithoutCampaignStepInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    campaignId: number
    clientId: number
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type EmailEventCreateOrConnectWithoutCampaignStepInput = {
    where: EmailEventWhereUniqueInput
    create: XOR<EmailEventCreateWithoutCampaignStepInput, EmailEventUncheckedCreateWithoutCampaignStepInput>
  }

  export type EmailEventCreateManyCampaignStepInputEnvelope = {
    data: EmailEventCreateManyCampaignStepInput | EmailEventCreateManyCampaignStepInput[]
    skipDuplicates?: boolean
  }

  export type TemplateUpsertWithoutCampaignStepsInput = {
    update: XOR<TemplateUpdateWithoutCampaignStepsInput, TemplateUncheckedUpdateWithoutCampaignStepsInput>
    create: XOR<TemplateCreateWithoutCampaignStepsInput, TemplateUncheckedCreateWithoutCampaignStepsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutCampaignStepsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutCampaignStepsInput, TemplateUncheckedUpdateWithoutCampaignStepsInput>
  }

  export type TemplateUpdateWithoutCampaignStepsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTemplatesNestedInput
    createdBy?: UserUpdateOneWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutCampaignStepsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpsertWithoutStepsInput = {
    update: XOR<CampaignUpdateWithoutStepsInput, CampaignUncheckedUpdateWithoutStepsInput>
    create: XOR<CampaignCreateWithoutStepsInput, CampaignUncheckedCreateWithoutStepsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutStepsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutStepsInput, CampaignUncheckedUpdateWithoutStepsInput>
  }

  export type CampaignUpdateWithoutStepsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneWithoutCampaignsNestedInput
    clients?: CampaignClientUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutStepsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: CampaignClientUncheckedUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type EmailEventUpsertWithWhereUniqueWithoutCampaignStepInput = {
    where: EmailEventWhereUniqueInput
    update: XOR<EmailEventUpdateWithoutCampaignStepInput, EmailEventUncheckedUpdateWithoutCampaignStepInput>
    create: XOR<EmailEventCreateWithoutCampaignStepInput, EmailEventUncheckedCreateWithoutCampaignStepInput>
  }

  export type EmailEventUpdateWithWhereUniqueWithoutCampaignStepInput = {
    where: EmailEventWhereUniqueInput
    data: XOR<EmailEventUpdateWithoutCampaignStepInput, EmailEventUncheckedUpdateWithoutCampaignStepInput>
  }

  export type EmailEventUpdateManyWithWhereWithoutCampaignStepInput = {
    where: EmailEventScalarWhereInput
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyWithoutCampaignStepInput>
  }

  export type CampaignCreateWithoutClientsInput = {
    name: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCampaignsInput
    createdBy?: UserCreateNestedOneWithoutCampaignsInput
    steps?: CampaignStepCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutClientsInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: CampaignStepUncheckedCreateNestedManyWithoutCampaignInput
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutClientsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutClientsInput, CampaignUncheckedCreateWithoutClientsInput>
  }

  export type ClientCreateWithoutCampaignsInput = {
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutClientsInput
    emailEvents?: EmailEventCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCampaignsInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emailEvents?: EmailEventUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCampaignsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCampaignsInput, ClientUncheckedCreateWithoutCampaignsInput>
  }

  export type EmailEventCreateWithoutCampaignClientInput = {
    type: $Enums.EmailEventType
    timestamp?: Date | string
    metadata?: string | null
    campaign: CampaignCreateNestedOneWithoutEmailEventsInput
    client: ClientCreateNestedOneWithoutEmailEventsInput
    campaignStep?: CampaignStepCreateNestedOneWithoutEmailEventsInput
  }

  export type EmailEventUncheckedCreateWithoutCampaignClientInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    clientId: number
    campaignStepId?: number | null
    metadata?: string | null
  }

  export type EmailEventCreateOrConnectWithoutCampaignClientInput = {
    where: EmailEventWhereUniqueInput
    create: XOR<EmailEventCreateWithoutCampaignClientInput, EmailEventUncheckedCreateWithoutCampaignClientInput>
  }

  export type EmailEventCreateManyCampaignClientInputEnvelope = {
    data: EmailEventCreateManyCampaignClientInput | EmailEventCreateManyCampaignClientInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithoutClientsInput = {
    update: XOR<CampaignUpdateWithoutClientsInput, CampaignUncheckedUpdateWithoutClientsInput>
    create: XOR<CampaignCreateWithoutClientsInput, CampaignUncheckedCreateWithoutClientsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutClientsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutClientsInput, CampaignUncheckedUpdateWithoutClientsInput>
  }

  export type CampaignUpdateWithoutClientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneWithoutCampaignsNestedInput
    steps?: CampaignStepUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: CampaignStepUncheckedUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type ClientUpsertWithoutCampaignsInput = {
    update: XOR<ClientUpdateWithoutCampaignsInput, ClientUncheckedUpdateWithoutCampaignsInput>
    create: XOR<ClientCreateWithoutCampaignsInput, ClientUncheckedCreateWithoutCampaignsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutCampaignsInput, ClientUncheckedUpdateWithoutCampaignsInput>
  }

  export type ClientUpdateWithoutCampaignsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutClientsNestedInput
    emailEvents?: EmailEventUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailEvents?: EmailEventUncheckedUpdateManyWithoutClientNestedInput
  }

  export type EmailEventUpsertWithWhereUniqueWithoutCampaignClientInput = {
    where: EmailEventWhereUniqueInput
    update: XOR<EmailEventUpdateWithoutCampaignClientInput, EmailEventUncheckedUpdateWithoutCampaignClientInput>
    create: XOR<EmailEventCreateWithoutCampaignClientInput, EmailEventUncheckedCreateWithoutCampaignClientInput>
  }

  export type EmailEventUpdateWithWhereUniqueWithoutCampaignClientInput = {
    where: EmailEventWhereUniqueInput
    data: XOR<EmailEventUpdateWithoutCampaignClientInput, EmailEventUncheckedUpdateWithoutCampaignClientInput>
  }

  export type EmailEventUpdateManyWithWhereWithoutCampaignClientInput = {
    where: EmailEventScalarWhereInput
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyWithoutCampaignClientInput>
  }

  export type CampaignCreateWithoutEmailEventsInput = {
    name: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCampaignsInput
    createdBy?: UserCreateNestedOneWithoutCampaignsInput
    steps?: CampaignStepCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutEmailEventsInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    companyId: number
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: CampaignStepUncheckedCreateNestedManyWithoutCampaignInput
    clients?: CampaignClientUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutEmailEventsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutEmailEventsInput, CampaignUncheckedCreateWithoutEmailEventsInput>
  }

  export type ClientCreateWithoutEmailEventsInput = {
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutClientsInput
    campaigns?: CampaignClientCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEmailEventsInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignClientUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEmailEventsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEmailEventsInput, ClientUncheckedCreateWithoutEmailEventsInput>
  }

  export type CampaignStepCreateWithoutEmailEventsInput = {
    sequenceOrder: number
    delayDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
    template: TemplateCreateNestedOneWithoutCampaignStepsInput
    campaign: CampaignCreateNestedOneWithoutStepsInput
  }

  export type CampaignStepUncheckedCreateWithoutEmailEventsInput = {
    id?: number
    sequenceOrder: number
    delayDays: number
    templateId: number
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
  }

  export type CampaignStepCreateOrConnectWithoutEmailEventsInput = {
    where: CampaignStepWhereUniqueInput
    create: XOR<CampaignStepCreateWithoutEmailEventsInput, CampaignStepUncheckedCreateWithoutEmailEventsInput>
  }

  export type CampaignClientCreateWithoutEmailEventsInput = {
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutClientsInput
    client: ClientCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignClientUncheckedCreateWithoutEmailEventsInput = {
    campaignId: number
    clientId: number
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
  }

  export type CampaignClientCreateOrConnectWithoutEmailEventsInput = {
    where: CampaignClientWhereUniqueInput
    create: XOR<CampaignClientCreateWithoutEmailEventsInput, CampaignClientUncheckedCreateWithoutEmailEventsInput>
  }

  export type CampaignUpsertWithoutEmailEventsInput = {
    update: XOR<CampaignUpdateWithoutEmailEventsInput, CampaignUncheckedUpdateWithoutEmailEventsInput>
    create: XOR<CampaignCreateWithoutEmailEventsInput, CampaignUncheckedCreateWithoutEmailEventsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutEmailEventsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutEmailEventsInput, CampaignUncheckedUpdateWithoutEmailEventsInput>
  }

  export type CampaignUpdateWithoutEmailEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneWithoutCampaignsNestedInput
    steps?: CampaignStepUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutEmailEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: CampaignStepUncheckedUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type ClientUpsertWithoutEmailEventsInput = {
    update: XOR<ClientUpdateWithoutEmailEventsInput, ClientUncheckedUpdateWithoutEmailEventsInput>
    create: XOR<ClientCreateWithoutEmailEventsInput, ClientUncheckedCreateWithoutEmailEventsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutEmailEventsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutEmailEventsInput, ClientUncheckedUpdateWithoutEmailEventsInput>
  }

  export type ClientUpdateWithoutEmailEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutClientsNestedInput
    campaigns?: CampaignClientUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEmailEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignClientUncheckedUpdateManyWithoutClientNestedInput
  }

  export type CampaignStepUpsertWithoutEmailEventsInput = {
    update: XOR<CampaignStepUpdateWithoutEmailEventsInput, CampaignStepUncheckedUpdateWithoutEmailEventsInput>
    create: XOR<CampaignStepCreateWithoutEmailEventsInput, CampaignStepUncheckedCreateWithoutEmailEventsInput>
    where?: CampaignStepWhereInput
  }

  export type CampaignStepUpdateToOneWithWhereWithoutEmailEventsInput = {
    where?: CampaignStepWhereInput
    data: XOR<CampaignStepUpdateWithoutEmailEventsInput, CampaignStepUncheckedUpdateWithoutEmailEventsInput>
  }

  export type CampaignStepUpdateWithoutEmailEventsInput = {
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
    template?: TemplateUpdateOneRequiredWithoutCampaignStepsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutStepsNestedInput
  }

  export type CampaignStepUncheckedUpdateWithoutEmailEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignClientUpsertWithoutEmailEventsInput = {
    update: XOR<CampaignClientUpdateWithoutEmailEventsInput, CampaignClientUncheckedUpdateWithoutEmailEventsInput>
    create: XOR<CampaignClientCreateWithoutEmailEventsInput, CampaignClientUncheckedCreateWithoutEmailEventsInput>
    where?: CampaignClientWhereInput
  }

  export type CampaignClientUpdateToOneWithWhereWithoutEmailEventsInput = {
    where?: CampaignClientWhereInput
    data: XOR<CampaignClientUpdateWithoutEmailEventsInput, CampaignClientUncheckedUpdateWithoutEmailEventsInput>
  }

  export type CampaignClientUpdateWithoutEmailEventsInput = {
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutClientsNestedInput
    client?: ClientUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignClientUncheckedUpdateWithoutEmailEventsInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUsersInput
    templates?: TemplateCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    companyId?: number | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutCreatedByInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUsersNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: number
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateManyCreatedByInput = {
    id?: number
    name: string
    subject: string
    bodyHtml: string
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyCreatedByInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTemplatesNestedInput
    campaignSteps?: CampaignStepUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignSteps?: CampaignStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCampaignsNestedInput
    steps?: CampaignStepUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: CampaignStepUncheckedUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUncheckedUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateManyCompanyInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateManyCompanyInput = {
    id?: number
    name: string
    subject: string
    bodyHtml: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyCompanyInput = {
    id?: number
    name: string
    status?: $Enums.CampaignStatus
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutCompanyInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignClientUpdateManyWithoutClientNestedInput
    emailEvents?: EmailEventUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignClientUncheckedUpdateManyWithoutClientNestedInput
    emailEvents?: EmailEventUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutTemplatesNestedInput
    campaignSteps?: CampaignStepUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignSteps?: CampaignStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyHtml?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCampaignsNestedInput
    steps?: CampaignStepUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: CampaignStepUncheckedUpdateManyWithoutCampaignNestedInput
    clients?: CampaignClientUncheckedUpdateManyWithoutCampaignNestedInput
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignClientCreateManyClientInput = {
    campaignId: number
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
  }

  export type EmailEventCreateManyClientInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    campaignId: number
    campaignStepId?: number | null
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type CampaignClientUpdateWithoutClientInput = {
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutClientsNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignClientNestedInput
  }

  export type CampaignClientUncheckedUpdateWithoutClientInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignClientNestedInput
  }

  export type CampaignClientUncheckedUpdateManyWithoutClientInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailEventUpdateWithoutClientInput = {
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutEmailEventsNestedInput
    campaignStep?: CampaignStepUpdateOneWithoutEmailEventsNestedInput
    campaignClient?: CampaignClientUpdateOneWithoutEmailEventsNestedInput
  }

  export type EmailEventUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignStepCreateManyTemplateInput = {
    id?: number
    sequenceOrder: number
    delayDays: number
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
  }

  export type CampaignStepUpdateWithoutTemplateInput = {
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutStepsNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignStepNestedInput
  }

  export type CampaignStepUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignStepNestedInput
  }

  export type CampaignStepUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignStepCreateManyCampaignInput = {
    id?: number
    sequenceOrder: number
    delayDays: number
    templateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sendDays?: string | null
    sendTimeStart?: string | null
    sendTimeEnd?: string | null
  }

  export type CampaignClientCreateManyCampaignInput = {
    clientId: number
    statusInCampaign?: $Enums.ClientCampaignStatus
    currentStepOrder?: number | null
    nextSendTime?: Date | string | null
    addedAt?: Date | string
  }

  export type EmailEventCreateManyCampaignInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    clientId: number
    campaignStepId?: number | null
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type CampaignStepUpdateWithoutCampaignInput = {
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
    template?: TemplateUpdateOneRequiredWithoutCampaignStepsNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignStepNestedInput
  }

  export type CampaignStepUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignStepNestedInput
  }

  export type CampaignStepUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    delayDays?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendDays?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeStart?: NullableStringFieldUpdateOperationsInput | string | null
    sendTimeEnd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignClientUpdateWithoutCampaignInput = {
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutCampaignsNestedInput
    emailEvents?: EmailEventUpdateManyWithoutCampaignClientNestedInput
  }

  export type CampaignClientUncheckedUpdateWithoutCampaignInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailEvents?: EmailEventUncheckedUpdateManyWithoutCampaignClientNestedInput
  }

  export type CampaignClientUncheckedUpdateManyWithoutCampaignInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    statusInCampaign?: EnumClientCampaignStatusFieldUpdateOperationsInput | $Enums.ClientCampaignStatus
    currentStepOrder?: NullableIntFieldUpdateOperationsInput | number | null
    nextSendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailEventUpdateWithoutCampaignInput = {
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutEmailEventsNestedInput
    campaignStep?: CampaignStepUpdateOneWithoutEmailEventsNestedInput
    campaignClient?: CampaignClientUpdateOneWithoutEmailEventsNestedInput
  }

  export type EmailEventUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventCreateManyCampaignStepInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    campaignId: number
    clientId: number
    campaignClientId?: number | null
    metadata?: string | null
  }

  export type EmailEventUpdateWithoutCampaignStepInput = {
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutEmailEventsNestedInput
    client?: ClientUpdateOneRequiredWithoutEmailEventsNestedInput
    campaignClient?: CampaignClientUpdateOneWithoutEmailEventsNestedInput
  }

  export type EmailEventUncheckedUpdateWithoutCampaignStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventUncheckedUpdateManyWithoutCampaignStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    campaignClientId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventCreateManyCampaignClientInput = {
    id?: number
    type: $Enums.EmailEventType
    timestamp?: Date | string
    clientId: number
    campaignStepId?: number | null
    metadata?: string | null
  }

  export type EmailEventUpdateWithoutCampaignClientInput = {
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutEmailEventsNestedInput
    client?: ClientUpdateOneRequiredWithoutEmailEventsNestedInput
    campaignStep?: CampaignStepUpdateOneWithoutEmailEventsNestedInput
  }

  export type EmailEventUncheckedUpdateWithoutCampaignClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventUncheckedUpdateManyWithoutCampaignClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEmailEventTypeFieldUpdateOperationsInput | $Enums.EmailEventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    campaignStepId?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
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
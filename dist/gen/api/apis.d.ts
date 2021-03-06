export * from './accountingApi';
export * from './assetApi';
export * from './projectApi';
export * from './filesApi';
export * from './payrollAUApi';
export * from './bankfeedsApi';
export * from './payrollUKApi';
export * from './payrollNZApi';
import { AccountingApi } from './accountingApi';
import { AssetApi } from './assetApi';
import { FilesApi } from './filesApi';
import { ProjectApi } from './projectApi';
import { PayrollAuApi } from './payrollAUApi';
import { BankFeedsApi } from './bankfeedsApi';
import { PayrollUkApi } from './payrollUKApi';
import { PayrollNzApi } from './payrollNZApi';
export declare const APIS: (typeof AccountingApi | typeof AssetApi | typeof ProjectApi | typeof FilesApi | typeof PayrollAuApi | typeof BankFeedsApi | typeof PayrollUkApi | typeof PayrollNzApi)[];

import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ecofund_development',
  entities: ['src/**/*.entity.ts'],
  migrations: ['priv/migrations/*.ts'],
  migrationsTableName: "ecofund_migration_table",
  synchronize: false,
});

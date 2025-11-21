export const up = async (knex) => {
    return knex.schema.createTable('permissions', (table) => {
        table.increments('id').primary();
        table.string('name', 150).notNullable();
        table.string('email', 255).unique().notNullable();
        table.text('permission', 'longtext');
        table.timestamps(true, true);
    });
}

export const down = async (knex) => {
    return knex.schema.dropTable('permissions');
}
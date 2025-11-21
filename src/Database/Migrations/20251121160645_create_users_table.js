export const up = async (knex) => {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name', 150).notNullable();
        table.string('email', 255).unique().notNullable();
        table.text('password', 'longtext');
        table.text('avatar_url', 'longtext').notNullable();
        table.string('color', 6).unique().notNullable();
        table.string('code', 6);
        table.timestamps(true, true);
    });
}

export const down = async (knex) => {
    return knex.schema.dropTable('users');
}
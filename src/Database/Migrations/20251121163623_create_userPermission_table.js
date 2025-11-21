export const up = async (knex) => {
    return knex.schema.createTable('user_permission', (table) => {
        table.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users').onDelete('CASCADE');
        table.integer('permission_id').unsigned().notNullable()
            .references('id').inTable('permissions').onDelete('CASCADE')
        table.timestamps(true, true);
    });
}

export const down = async (knex) => {
    return knex.schema.dropTable('user_permission');
}
exports.up = (knex) => knex.schema.createTable('workflow', (table) => {
  table.uuid('id').primary();
  table.string('name', 255).notNullable().unique();
  table.text('description').notNullable();
  table.jsonb('blueprint_spec').notNullable();
  table.timestamp('created_at').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('workflow');

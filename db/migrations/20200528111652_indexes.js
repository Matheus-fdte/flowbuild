
exports.up = function(knex) {
  return knex.schema.alterTable('process_state', (table) => {
      table.index(['process_id','step_number']);
  });
};

exports.down = function(knex) {
    return knex.schema.alterTable('process_state', (table) => {
        table.dropIndex(['process_id','step_number']);
    });
};

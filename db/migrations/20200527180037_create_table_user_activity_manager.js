
exports.up = function(knex) {
  return knex.schema.createTable("user_activity_manager", (table) => {
    table.string("user_id").notNullable();
    table.uuid("activity_manager_id").notNullable();
    table.foreign("activity_manager_id").references("activity_manager.id");
    table.unique(["user_id", "activity_manager_id"]);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_activity_manager");
};

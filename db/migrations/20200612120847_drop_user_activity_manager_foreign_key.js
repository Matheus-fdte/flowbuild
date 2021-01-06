
exports.up = function (knex) {
    return knex.schema.alterTable("user_activity_manager", (table) => {
        table.dropForeign("activity_manager_id");
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("user_activity_manager", (table) => {
        table.foreign("activity_manager_id").references("activity_manager.id");
    });
};

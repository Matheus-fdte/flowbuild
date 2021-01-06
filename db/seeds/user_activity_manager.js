
exports.seed = function(knex) {
  return knex.raw(`insert into user_activity_manager (
    select distinct am.props -> 'result' ->> 'current_user',am.id from activity_manager as am where am.props -> 'result' ->> 'current_user' is not null
  )`)
};

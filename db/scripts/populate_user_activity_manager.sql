insert into user_activity_manager (
  select am.props -> 'result' ->> 'current_user',am.id from activity_manager as am where am.props -> 'result' ->> 'current_user' is not null
)
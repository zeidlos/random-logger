const interval = setInterval(function () {
  console.log("random-logger");
  console.log(
    '{"data": {"context": {},"PORT": 4003,"PATH": "/middleware","SENTRY_DSN": "https://abc@host.name/50","LOG_FORMAT": "logstash","LOG_LEVEL": "info","EXT_SYSTEM_URL": "","PROJECT_NAME": "name","K8S_NS": "foobar","SENTRY_CURRENT_ENV": "production"},"tags": {"application": "random-logger","release": "0.0.1","project_name": "random-logger","k8s_ns": "random-logger","type": "configuration"},"level": "info","message": "none"})',
  );
}, 5000);

clearInterval(interval);

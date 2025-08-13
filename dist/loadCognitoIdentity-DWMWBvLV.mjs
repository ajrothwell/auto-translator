var xe = Object.defineProperty;
var fe = (e, n, t) => n in e ? xe(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var r = (e, n, t) => fe(e, typeof n != "symbol" ? n + "" : n, t);
import { r as we, n as Q, g as Se, E as Pe, a as Ie, b as ge, c as Ce, t as be, f as ve, p as Re, N as Ae, A as Fe, d as ze, e as De, h as _e, s as $e, S as ke, D as Ne, F as Te, i as Ue, j as He, k as Oe, l as Le, m as Me, o as Ge, q as qe, u as je, v as Be, w as Ve, x as We, y as Je, z as Xe, C as Ye, B as Ke, G as Qe, H as Ze, I as et, J as tt, K as nt, L as st, M as ot, O as rt, P as it, Q as at, R as dt, T as ct, U as pt, V as lt, _ as p, W as Z, X as ut, Y as yt, Z as mt, $ as ht, a0 as h, a1 as ee, a2 as te, a3 as ne } from "./main-XMO3Pylz.mjs";
class Et {
  async sign(n, t, s) {
    return n;
  }
}
const A = "***SensitiveInformation***", R = (e) => {
  if (e != null) {
    if (typeof e == "string") {
      const n = parseFloat(e);
      if (!Number.isNaN(n))
        return String(n) !== String(e) && oe.warn(se(`Expected number but observed string: ${e}`)), n;
    }
    if (typeof e == "number")
      return e;
    throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
  }
}, xt = (e, n) => {
  if (e == null)
    throw new TypeError("Expected a non-null value");
  return e;
}, v = (e) => {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (["boolean", "number", "bigint"].includes(typeof e))
      return oe.warn(se(`Expected string, got ${typeof e}: ${e}`)), String(e);
    throw new TypeError(`Expected string, got ${typeof e}: ${e}`);
  }
}, ft = (e) => R(typeof e == "string" ? St(e) : e), wt = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, St = (e) => {
  const n = e.match(wt);
  if (n === null || n[0].length !== e.length)
    throw new TypeError("Expected real number, got implicit NaN");
  return parseFloat(e);
}, se = (e) => String(new TypeError(e).stack || e).split(`
`).slice(0, 5).filter((n) => !n.includes("stackTraceWarning")).join(`
`), oe = {
  warn: console.warn
}, Pt = (e) => {
  if (e == null)
    return;
  let n;
  if (typeof e == "number")
    n = e;
  else if (typeof e == "string")
    n = ft(e);
  else if (typeof e == "object" && e.tag === 1)
    n = e.value;
  else
    throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
  if (Number.isNaN(n) || n === 1 / 0 || n === -1 / 0)
    throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
  return new Date(Math.round(n * 1e3));
}, re = (e, n) => {
  const t = {};
  for (const s in n)
    It(t, e, n, s);
  return t;
}, It = (e, n, t, s) => {
  if (n !== null) {
    let c = t[s];
    typeof c == "function" && (c = [, c]);
    const [m = gt, x = Ct, w = s] = c;
    (typeof m == "function" && m(n[w]) || typeof m != "function" && m) && (e[s] = x(n[w]));
    return;
  }
  let [o, u] = t[s];
  if (typeof u == "function") {
    let c;
    const m = o === void 0 && (c = u()) != null, x = typeof o == "function" && !!o(void 0) || typeof o != "function" && !!o;
    m ? e[s] = c : x && (e[s] = u());
  } else {
    const c = o === void 0 && u != null, m = typeof o == "function" && !!o(u) || typeof o != "function" && !!o;
    (c || m) && (e[s] = u);
  }
}, gt = (e) => e != null, Ct = (e) => e, bt = async (e, n, t) => ({
  operation: Se(n).operation,
  region: await Q(e.region)() || (() => {
    throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
  })()
});
function vt(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "cognito-identity",
      region: e.region
    },
    propertiesExtractor: (n, t) => ({
      signingProperties: {
        config: n,
        context: t
      }
    })
  };
}
function b(e) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
const Rt = (e) => {
  const n = [];
  switch (e.operation) {
    case "GetCredentialsForIdentity": {
      n.push(b());
      break;
    }
    case "GetId": {
      n.push(b());
      break;
    }
    case "GetOpenIdToken": {
      n.push(b());
      break;
    }
    case "UnlinkIdentity": {
      n.push(b());
      break;
    }
    default:
      n.push(vt(e));
  }
  return n;
}, At = (e) => {
  const n = we(e);
  return Object.assign(n, {
    authSchemePreference: Q(e.authSchemePreference ?? [])
  });
}, Ft = (e) => Object.assign(e, {
  useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
  useFipsEndpoint: e.useFipsEndpoint ?? !1,
  defaultSigningName: "cognito-identity"
}), ie = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
}, zt = "3.808.0", Dt = {
  version: zt
}, ae = "required", a = "fn", d = "argv", P = "ref", G = !0, q = "isSet", C = "booleanEquals", S = "error", E = "endpoint", f = "tree", F = "PartitionResult", z = "getAttr", I = "stringEquals", j = { [ae]: !1, type: "String" }, B = { [ae]: !0, default: !1, type: "Boolean" }, V = { [P]: "Endpoint" }, de = { [a]: C, [d]: [{ [P]: "UseFIPS" }, !0] }, ce = { [a]: C, [d]: [{ [P]: "UseDualStack" }, !0] }, i = {}, g = { [P]: "Region" }, W = { [a]: z, [d]: [{ [P]: F }, "supportsFIPS"] }, pe = { [P]: F }, J = { [a]: C, [d]: [!0, { [a]: z, [d]: [pe, "supportsDualStack"] }] }, X = [de], Y = [ce], K = [g], _t = { parameters: { Region: j, UseDualStack: B, UseFIPS: B, Endpoint: j }, rules: [{ conditions: [{ [a]: q, [d]: [V] }], rules: [{ conditions: X, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: S }, { conditions: Y, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: S }, { endpoint: { url: V, properties: i, headers: i }, type: E }], type: f }, { conditions: [{ [a]: q, [d]: K }], rules: [{ conditions: [{ [a]: "aws.partition", [d]: K, assign: F }], rules: [{ conditions: [de, ce], rules: [{ conditions: [{ [a]: C, [d]: [G, W] }, J], rules: [{ conditions: [{ [a]: I, [d]: [g, "us-east-1"] }], endpoint: { url: "https://cognito-identity-fips.us-east-1.amazonaws.com", properties: i, headers: i }, type: E }, { conditions: [{ [a]: I, [d]: [g, "us-east-2"] }], endpoint: { url: "https://cognito-identity-fips.us-east-2.amazonaws.com", properties: i, headers: i }, type: E }, { conditions: [{ [a]: I, [d]: [g, "us-west-1"] }], endpoint: { url: "https://cognito-identity-fips.us-west-1.amazonaws.com", properties: i, headers: i }, type: E }, { conditions: [{ [a]: I, [d]: [g, "us-west-2"] }], endpoint: { url: "https://cognito-identity-fips.us-west-2.amazonaws.com", properties: i, headers: i }, type: E }, { endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: i, headers: i }, type: E }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: S }], type: f }, { conditions: X, rules: [{ conditions: [{ [a]: C, [d]: [W, G] }], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: i, headers: i }, type: E }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: S }], type: f }, { conditions: Y, rules: [{ conditions: [J], rules: [{ conditions: [{ [a]: I, [d]: ["aws", { [a]: z, [d]: [pe, "name"] }] }], endpoint: { url: "https://cognito-identity.{Region}.amazonaws.com", properties: i, headers: i }, type: E }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: i, headers: i }, type: E }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: S }], type: f }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: i, headers: i }, type: E }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: S }] }, $t = _t, kt = new Pe({
  size: 50,
  params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
}), Nt = (e, n = {}) => kt.get(e, () => Ie($t, {
  endpointParams: e,
  logger: n.logger
}));
Ce.aws = ge;
const Tt = (e) => ({
  apiVersion: "2014-06-30",
  base64Decoder: (e == null ? void 0 : e.base64Decoder) ?? De,
  base64Encoder: (e == null ? void 0 : e.base64Encoder) ?? ze,
  disableHostPrefix: (e == null ? void 0 : e.disableHostPrefix) ?? !1,
  endpointProvider: (e == null ? void 0 : e.endpointProvider) ?? Nt,
  extensions: (e == null ? void 0 : e.extensions) ?? [],
  httpAuthSchemeProvider: (e == null ? void 0 : e.httpAuthSchemeProvider) ?? Rt,
  httpAuthSchemes: (e == null ? void 0 : e.httpAuthSchemes) ?? [
    {
      schemeId: "aws.auth#sigv4",
      identityProvider: (n) => n.getIdentityProvider("aws.auth#sigv4"),
      signer: new Fe()
    },
    {
      schemeId: "smithy.api#noAuth",
      identityProvider: (n) => n.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
      signer: new Et()
    }
  ],
  logger: (e == null ? void 0 : e.logger) ?? new Ae(),
  serviceId: (e == null ? void 0 : e.serviceId) ?? "Cognito Identity",
  urlParser: (e == null ? void 0 : e.urlParser) ?? Re,
  utf8Decoder: (e == null ? void 0 : e.utf8Decoder) ?? ve,
  utf8Encoder: (e == null ? void 0 : e.utf8Encoder) ?? be
}), Ut = (e) => {
  const n = _e(e), t = () => n().then(qe), s = Tt(e);
  return {
    ...s,
    ...e,
    runtime: "browser",
    defaultsMode: n,
    bodyLengthChecker: (e == null ? void 0 : e.bodyLengthChecker) ?? Le,
    credentialDefaultProvider: (e == null ? void 0 : e.credentialDefaultProvider) ?? ((o) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: (e == null ? void 0 : e.defaultUserAgentProvider) ?? Oe({ serviceId: s.serviceId, clientVersion: Dt.version }),
    maxAttempts: (e == null ? void 0 : e.maxAttempts) ?? He,
    region: (e == null ? void 0 : e.region) ?? Ue("Region is missing"),
    requestHandler: Te.create((e == null ? void 0 : e.requestHandler) ?? t),
    retryMode: (e == null ? void 0 : e.retryMode) ?? (async () => (await t()).retryMode || Ne),
    sha256: (e == null ? void 0 : e.sha256) ?? ke,
    streamCollector: (e == null ? void 0 : e.streamCollector) ?? $e,
    useDualstackEndpoint: (e == null ? void 0 : e.useDualstackEndpoint) ?? (() => Promise.resolve(Ge)),
    useFipsEndpoint: (e == null ? void 0 : e.useFipsEndpoint) ?? (() => Promise.resolve(Me))
  };
}, Ht = (e) => {
  const n = e.httpAuthSchemes;
  let t = e.httpAuthSchemeProvider, s = e.credentials;
  return {
    setHttpAuthScheme(o) {
      const u = n.findIndex((c) => c.schemeId === o.schemeId);
      u === -1 ? n.push(o) : n.splice(u, 1, o);
    },
    httpAuthSchemes() {
      return n;
    },
    setHttpAuthSchemeProvider(o) {
      t = o;
    },
    httpAuthSchemeProvider() {
      return t;
    },
    setCredentials(o) {
      s = o;
    },
    credentials() {
      return s;
    }
  };
}, Ot = (e) => ({
  httpAuthSchemes: e.httpAuthSchemes(),
  httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
  credentials: e.credentials()
}), Lt = (e, n) => {
  const t = Object.assign(je(e), Be(e), Ve(e), Ht(e));
  return n.forEach((s) => s.configure(t)), Object.assign(e, We(t), Je(t), Xe(t), Ot(t));
};
class un extends Ye {
  constructor(...[t]) {
    const s = Ut(t || {});
    super(s);
    r(this, "config");
    this.initConfig = s;
    const o = Ft(s), u = Ke(o), c = Qe(u), m = Ze(c), x = tt(m), w = et(x), me = At(w), he = Lt(me, (t == null ? void 0 : t.extensions) || []);
    this.config = he, this.middlewareStack.use(nt(this.config)), this.middlewareStack.use(st(this.config)), this.middlewareStack.use(ot(this.config)), this.middlewareStack.use(rt(this.config)), this.middlewareStack.use(it(this.config)), this.middlewareStack.use(at(this.config)), this.middlewareStack.use(dt(this.config, {
      httpAuthSchemeParametersProvider: bt,
      identityProviderConfigProvider: async (Ee) => new ct({
        "aws.auth#sigv4": Ee.credentials
      })
    })), this.middlewareStack.use(pt(this.config));
  }
  destroy() {
    super.destroy();
  }
}
class l extends lt {
  constructor(n) {
    super(n), Object.setPrototypeOf(this, l.prototype);
  }
}
class D extends l {
  constructor(t) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...t
    });
    r(this, "name", "InternalErrorException");
    r(this, "$fault", "server");
    Object.setPrototypeOf(this, D.prototype);
  }
}
class _ extends l {
  constructor(t) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...t
    });
    r(this, "name", "InvalidParameterException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, _.prototype);
  }
}
class $ extends l {
  constructor(t) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...t
    });
    r(this, "name", "LimitExceededException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, $.prototype);
  }
}
class k extends l {
  constructor(t) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...t
    });
    r(this, "name", "NotAuthorizedException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, k.prototype);
  }
}
class N extends l {
  constructor(t) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...t
    });
    r(this, "name", "ResourceConflictException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, N.prototype);
  }
}
class T extends l {
  constructor(t) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...t
    });
    r(this, "name", "TooManyRequestsException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, T.prototype);
  }
}
class U extends l {
  constructor(t) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...t
    });
    r(this, "name", "ResourceNotFoundException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, U.prototype);
  }
}
class H extends l {
  constructor(t) {
    super({
      name: "ExternalServiceException",
      $fault: "client",
      ...t
    });
    r(this, "name", "ExternalServiceException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, H.prototype);
  }
}
class O extends l {
  constructor(t) {
    super({
      name: "InvalidIdentityPoolConfigurationException",
      $fault: "client",
      ...t
    });
    r(this, "name", "InvalidIdentityPoolConfigurationException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, O.prototype);
  }
}
class L extends l {
  constructor(t) {
    super({
      name: "DeveloperUserAlreadyRegisteredException",
      $fault: "client",
      ...t
    });
    r(this, "name", "DeveloperUserAlreadyRegisteredException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, L.prototype);
  }
}
class M extends l {
  constructor(t) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...t
    });
    r(this, "name", "ConcurrentModificationException");
    r(this, "$fault", "client");
    Object.setPrototypeOf(this, M.prototype);
  }
}
const Mt = (e) => ({
  ...e,
  ...e.Logins && { Logins: A }
}), Gt = (e) => ({
  ...e,
  ...e.SecretKey && { SecretKey: A }
}), qt = (e) => ({
  ...e,
  ...e.Credentials && { Credentials: Gt(e.Credentials) }
}), jt = (e) => ({
  ...e,
  ...e.Logins && { Logins: A }
}), Bt = async (e, n) => {
  const t = ye("GetCredentialsForIdentity");
  let s;
  return s = JSON.stringify(p(e)), ue(n, t, "/", void 0, s);
}, Vt = async (e, n) => {
  const t = ye("GetId");
  let s;
  return s = JSON.stringify(p(e)), ue(n, t, "/", void 0, s);
}, Wt = async (e, n) => {
  if (e.statusCode >= 300)
    return le(e, n);
  const t = await Z(e.body, n);
  let s = {};
  return s = dn(t), {
    $metadata: y(e),
    ...s
  };
}, Jt = async (e, n) => {
  if (e.statusCode >= 300)
    return le(e, n);
  const t = await Z(e.body, n);
  let s = {};
  return s = p(t), {
    $metadata: y(e),
    ...s
  };
}, le = async (e, n) => {
  const t = {
    ...e,
    body: await yt(e.body, n)
  }, s = mt(e, t.body);
  switch (s) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await Qt(t);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await en(t);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      throw await tn(t);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await nn(t);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await sn(t);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await rn(t);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await on(t);
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      throw await Kt(t);
    case "InvalidIdentityPoolConfigurationException":
    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
      throw await Zt(t);
    case "DeveloperUserAlreadyRegisteredException":
    case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
      throw await Yt(t);
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
      throw await Xt(t);
    default:
      const o = t.body;
      return cn({
        output: e,
        parsedBody: o,
        errorCode: s
      });
  }
}, Xt = async (e, n) => {
  const t = e.body, s = p(t), o = new M({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, Yt = async (e, n) => {
  const t = e.body, s = p(t), o = new L({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, Kt = async (e, n) => {
  const t = e.body, s = p(t), o = new H({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, Qt = async (e, n) => {
  const t = e.body, s = p(t), o = new D({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, Zt = async (e, n) => {
  const t = e.body, s = p(t), o = new O({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, en = async (e, n) => {
  const t = e.body, s = p(t), o = new _({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, tn = async (e, n) => {
  const t = e.body, s = p(t), o = new $({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, nn = async (e, n) => {
  const t = e.body, s = p(t), o = new k({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, sn = async (e, n) => {
  const t = e.body, s = p(t), o = new N({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, on = async (e, n) => {
  const t = e.body, s = p(t), o = new U({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, rn = async (e, n) => {
  const t = e.body, s = p(t), o = new T({
    $metadata: y(e),
    ...s
  });
  return h(o, t);
}, an = (e, n) => re(e, {
  AccessKeyId: v,
  Expiration: (t) => xt(Pt(R(t))),
  SecretKey: v,
  SessionToken: v
}), dn = (e, n) => re(e, {
  Credentials: (t) => an(t),
  IdentityId: v
}), y = (e) => ({
  httpStatusCode: e.statusCode,
  requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
  extendedRequestId: e.headers["x-amz-id-2"],
  cfId: e.headers["x-amz-cf-id"]
}), cn = ht(l), ue = async (e, n, t, s, o) => {
  const { hostname: u, protocol: c = "https", port: m, path: x } = await e.endpoint(), w = {
    protocol: c,
    hostname: u,
    port: m,
    method: "POST",
    path: x.endsWith("/") ? x.slice(0, -1) + t : x + t,
    headers: n
  };
  return o !== void 0 && (w.body = o), new ut(w);
};
function ye(e) {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSCognitoIdentityService.${e}`
  };
}
class yn extends ee.classBuilder().ep(ie).m(function(n, t, s, o) {
  return [
    te(s, this.serialize, this.deserialize),
    ne(s, n.getEndpointParameterInstructions())
  ];
}).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(Mt, qt).ser(Bt).de(Wt).build() {
}
class mn extends ee.classBuilder().ep(ie).m(function(n, t, s, o) {
  return [
    te(s, this.serialize, this.deserialize),
    ne(s, n.getEndpointParameterInstructions())
  ];
}).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").f(jt, void 0).ser(Vt).de(Jt).build() {
}
export {
  un as CognitoIdentityClient,
  yn as GetCredentialsForIdentityCommand,
  mn as GetIdCommand
};

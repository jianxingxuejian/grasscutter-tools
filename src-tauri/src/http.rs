use serde::{Deserialize, Serialize};

pub async fn request(
    method: String,
    url: String,
    params: serde_json::Value,
    headers: Headers,
) -> Result<String, reqwest::Error> {
    let client = reqwest::Client::builder()
        .danger_accept_invalid_certs(true)
        .build()?;

    let method = match method.as_str() {
        "GET" => reqwest::Method::GET,
        "POST" => reqwest::Method::POST,
        "PUT" => reqwest::Method::PUT,
        "DELETE" => reqwest::Method::DELETE,
        "PATCH" => reqwest::Method::PATCH,
        "HEAD" => reqwest::Method::HEAD,
        "OPTIONS" => reqwest::Method::OPTIONS,
        _ => reqwest::Method::GET,
    };

    println!("{}", headers.admin_token);

    let result = client
        .request(method, url)
        .header("locale", headers.locale)
        .header("token", headers.token)
        .header("admin_token", headers.admin_token)
        .json(&params)
        .send()
        .await?
        .text()
        .await?;
    Ok(result)
}

#[derive(Serialize, Deserialize)]
pub struct Headers {
    pub locale: String,
    pub token: String,
    pub admin_token: String,
}

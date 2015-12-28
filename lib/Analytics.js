class Analytics
{
    constructor(trackingId, clientId, userAgent, screenRes, version)
    {
        this.version = version || 1;
        this.trackingId = trackingId;
        this.clientId = clientId;
        this.userAgent = userAgent;
        this.screenRes = screenRes;
    }

    send(hit)
    {

        hit.set({
            v: this.version,
            tid: this.trackingId,
            cid: this.clientId,
            ua: this.userAgent,
            sr: this.screenRes
        });

        fetch('https://ssl.google-analytics.com/collect?' + hit.toQueryString() + '&z=' + Math.round(Math.random() * 1e8), {
            method: 'get',
        });
    }
}

module.exports = Analytics;

from datetime import datetime, timezone

# Get current UTC time with the 'Z' suffix
iso_now = datetime.now(timezone.utc).isoformat(timespec='milliseconds').replace('+00:00', 'Z')
print(iso_now)
# Output: 2026-06-13T07:31:50.123Z
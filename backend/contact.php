<?php
// Optional PHP contact endpoint. The React portfolio currently uses mailto as a reliable fallback.
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
  exit;
}
$input = json_decode(file_get_contents('php://input'), true) ?? [];
$name = trim($input['name'] ?? '');
$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$message = trim($input['message'] ?? '');
if ($name === '' || !$email || $message === '') {
  http_response_code(422);
  echo json_encode(['success' => false, 'message' => 'Please provide a name, valid email, and message.']);
  exit;
}
// Configure a real mail provider on your PHP host before enabling email delivery.
echo json_encode(['success' => true, 'message' => 'Your message was received by the demo endpoint.']);
